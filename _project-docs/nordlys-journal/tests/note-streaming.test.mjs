// Synthetic regression tests. No keys, private prompts, or patient data.
// Run: node --test _project-docs/nordlys-journal/tests/note-streaming.test.mjs
import test from 'node:test';
import assert from 'node:assert/strict';
import { streamResponsesSse } from '../../../journal/js/core/note-runner.js';
import { initOpenAiNoteGeneration } from '../../../journal/js/noteGeneration_openai.js';

const output = 'Syntetisk testtekst æøå.';
const finalResponse = (text = output) => ({
  status: 'completed', output: [{ type: 'message', content: [{ type: 'output_text', text }] }],
  usage: { input_tokens: 10, output_tokens: 5 }
});
const complete = (text = output) => ({ type: 'response.completed', response: finalResponse(text) });
const delta = (text = output) => ({ type: 'response.output_text.delta', delta: text });
const frame = (event, newline = '\n') => `event: ${event.type}${newline}data: ${JSON.stringify(event)}${newline}${newline}`;
function streamed(text, chunkSize = 13) {
  const bytes = new TextEncoder().encode(text);
  let offset = 0;
  return new Response(new ReadableStream({
    pull(controller) {
      if (offset >= bytes.length) return controller.close();
      controller.enqueue(bytes.slice(offset, offset += chunkSize));
    }
  }), { headers: { 'Content-Type': 'text/event-stream' } });
}

for (const newline of ['\n', '\r\n', '\r']) {
  test(`streaming handles ${JSON.stringify(newline)}, arbitrary byte splits, UTF-8`, async () => {
    let text = '', done = 0;
    await streamResponsesSse(streamed(frame(delta(), newline) + frame(complete(), newline), 1), {
      onDelta: (part) => { text += part; }, onDone: () => { done++; }
    });
    assert.equal(text, output); assert.equal(done, 1);
  });
}
test('terminal frame without trailing blank line is consumed', async () => {
  let done = 0;
  await streamResponsesSse(streamed(frame(complete()).trimEnd()), { onDone: () => done++ });
  assert.equal(done, 1);
});
for (const event of [
  { type: 'response.failed', response: { status: 'failed', error: { code: 'server_error', message: 'Synthetic failure' } } },
  { type: 'response.incomplete', response: { status: 'incomplete', incomplete_details: { reason: 'max_output_tokens' } } },
  { type: 'error', code: 'rate_limit_exceeded', message: 'Synthetic limit' },
  { type: 'response.error', error: { message: 'Synthetic legacy error' } }
]) {
  test(`${event.type} rejects and never signals completion`, async () => {
    let done = 0, errors = 0;
    await assert.rejects(streamResponsesSse(streamed(frame(event)), {
      onDone: () => done++, onError: () => errors++
    }));
    assert.equal(done, 0); assert.equal(errors, 1);
  });
}
for (const text of ['', frame(delta()), 'data: [DONE]\n\n', 'data: broken-json\n\n']) {
  test(`incomplete/malformed stream rejects (${text.length} bytes)`, async () => {
    let done = 0;
    await assert.rejects(streamResponsesSse(streamed(text), { onDone: () => done++ }));
    assert.equal(done, 0);
  });
}
test('abort while waiting does not become successful EOF', async () => {
  const controller = new AbortController();
  let done = 0;
  const pending = streamResponsesSse(new Response(new ReadableStream()), {
    signal: controller.signal, onDone: () => done++
  });
  controller.abort();
  await assert.rejects(pending, { name: 'AbortError' });
  assert.equal(done, 0);
});

async function generate(response, mode = 'streaming') {
  const fields = Object.fromEntries(Object.entries({
    transcription: 'Syntetisk samtale uten personopplysninger.', customPrompt: 'Skriv kort.',
    supplementaryInfo: 'Syntetisk tillegg.', generatedNote: '', noteTimer: '',
    noteProviderMode: mode, openaiModel: 'gpt-5.6-sol', gpt5Reasoning: 'low'
  }).map(([id, value]) => [id, { value, innerText: '' }]));
  let handler, completed = 0, finished = 0, request;
  fields.generateNoteButton = {
    addEventListener: (_, fn) => { handler = fn; }, removeEventListener() {}
  };
  globalThis.window = { __app: {
    beginNoteGeneration: () => new AbortController(),
    emitNoteFinished: () => completed++, finishNoteGeneration: () => finished++
  } };
  globalThis.document = { getElementById: (id) => fields[id] };
  globalThis.sessionStorage = { getItem: () => 'synthetic-test-key' };
  const originalFetch = globalThis.fetch;
  globalThis.fetch = async (_, options) => { request = JSON.parse(options.body); return response; };
  try {
    initOpenAiNoteGeneration();
    await handler();
    assert.equal(fields.transcription.value, 'Syntetisk samtale uten personopplysninger.');
    assert.equal(fields.customPrompt.value, 'Skriv kort.');
    assert.equal(fields.supplementaryInfo.value, 'Syntetisk tillegg.');
    assert.equal(request.model, 'gpt-5.6-sol');
    assert.equal(request.store, false);
    return { fields, completed, finished };
  } finally { globalThis.fetch = originalFetch; }
}
test('generator recovers final output when no deltas arrive', async () => {
  const result = await generate(streamed(frame(complete())));
  assert.equal(result.fields.generatedNote.value, output); assert.equal(result.completed, 1);
});
test('generator does not duplicate final output after deltas', async () => {
  const result = await generate(streamed(frame(delta()) + frame(complete())));
  assert.equal(result.fields.generatedNote.value, output); assert.equal(result.completed, 1);
});
test('empty completed response never becomes a successful note', async () => {
  const result = await generate(streamed(frame(complete(''))));
  assert.equal(result.completed, 0); assert.equal(result.finished, 1);
  assert.match(result.fields.generatedNote.value, /ingen notattekst/);
  assert.match(result.fields.noteTimer.innerText, /mislyktes/);
});
test('stream failure preserves partial text and does not emit success', async () => {
  const result = await generate(streamed(frame(delta()) + frame({ type: 'error', message: 'Synthetic failure' })));
  assert.equal(result.completed, 0); assert.equal(result.finished, 1);
  assert.match(result.fields.generatedNote.value, /Synthetic failure/);
  assert.match(result.fields.generatedNote.value, /Ufullstendig tekst/);
  assert.ok(result.fields.generatedNote.value.includes(output));
});
test('non-streaming still generates with the selected model', async () => {
  const result = await generate(Response.json(finalResponse()), 'non-streaming');
  assert.equal(result.fields.generatedNote.value, output); assert.equal(result.completed, 1);
});
test('non-streaming failed response is visible and never completed', async () => {
  const result = await generate(Response.json({ status: 'failed', error: { message: 'Synthetic failure' } }), 'non-streaming');
  assert.equal(result.completed, 0); assert.match(result.fields.generatedNote.value, /Synthetic failure/);
});
test('HTTP failure is visible and never completed', async () => {
  const result = await generate(new Response('Synthetic unavailable', { status: 503 }));
  assert.equal(result.completed, 0); assert.match(result.fields.generatedNote.value, /503/);
});
