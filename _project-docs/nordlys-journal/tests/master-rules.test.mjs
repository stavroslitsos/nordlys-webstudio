import test from 'node:test';
import assert from 'node:assert/strict';
import { readMasterRules, saveMasterRules, composeMasterNotePrompt } from '../../../journal/js/core/master-rules.js';
import { resolveCommonNoteInputs } from '../../../journal/js/core/note-runner.js';
import { setupBundle, validateSetupBundle } from '../../../journal/nordlys-bundle.js';
import { encryptKeys, decryptKeys } from '../../../journal/nordlys-crypto.js';
import { readFileSync } from 'node:fs';
import vm from 'node:vm';

const rule = 'Syntetisk regel: marker manglende opplysninger.';
function memory() {
 const data = new Map();
 globalThis.localStorage = { getItem: key => data.get(key) ?? null, setItem: (key, value) => data.set(key, value) };
}
test('shared rules are read afresh for each workspace and work without a selected prompt', () => {
 memory();
 const fields = { transcription:{value:'Syntetisk samtale'}, generatedNote:{value:'Tidligere notat'}, customPrompt:{value:''} };
 globalThis.document = {getElementById: id => fields[id]};
 saveMasterRules(rule);
 assert.match(resolveCommonNoteInputs({}).promptText, /Syntetisk regel/);
 fields.customPrompt.value='Bruk overskriftene A og B.';
 saveMasterRules('Ny felles regel');
 const next=resolveCommonNoteInputs({}).promptText;
 assert.match(next,/Ny felles regel/);assert.match(next,/overskriftene A og B/);assert.doesNotMatch(next,/Syntetisk regel/);
 assert.equal(fields.generatedNote.value,'Tidligere notat');
});
test('built-in standard is active with no custom rules and preserves the chosen presentation', () => {
 const base=composeMasterNotePrompt('Min mal','');
 assert.match(base,/NORDLYS GRUNNSTANDARD/);
 assert.match(base,/Min mal/);
 assert.match(base,/PRP/);
 assert.match(base,/Må avklares før signering/);
 const prompt=composeMasterNotePrompt('Min mal',rule);
 assert.match(prompt,/masterstandarden forrang/);assert.match(prompt,/visuell presentasjon/);assert.match(prompt,/Ikke konstruer funn/);
});
test('unreadable storage stops generation without erasing the existing note', () => {
 globalThis.localStorage={getItem(){throw new Error('blocked');}};
 const note={value:'Behold meg'};let finished=0, message='';
 globalThis.document={getElementById:id=>id==='transcription'?{value:'synthetic'}:id==='generatedNote'?note:null};
 globalThis.alert=text=>message=text;
 assert.equal(resolveCommonNoteInputs({finishNoteGeneration(){finished++;}}),null);
 assert.equal(finished,1);assert.match(message,/stoppet/);assert.equal(note.value,'Behold meg');
});
test('combined encrypted backup retains rules exactly and accepts legacy backups without overwriting rules', async () => {
 memory();saveMasterRules(rule);
 const legacy=setupBundle({openai_api_key:'synthetic-key'},'eu',{slots:{1:'Synthetic prompt'}});
 assert.equal(Object.hasOwn(validateSetupBundle(legacy),'masterRules'),false);
 assert.equal(readMasterRules(),rule);
 const bundle=setupBundle(legacy.keys,legacy.region,legacy.prompts,rule);
 const encrypted=await encryptKeys(bundle,'synthetic-passphrase-123');
 const restored=validateSetupBundle(await decryptKeys(encrypted,'synthetic-passphrase-123'));
 assert.equal(restored.masterRules,rule);
 assert.equal(validateSetupBundle({...bundle,masterRules:''}).masterRules,'');
 assert.throws(()=>validateSetupBundle({...bundle,masterRules:{bad:true}}));
});
test('all primary providers resolve common inputs including master rules', () => {
 for(const file of ['noteGeneration_openai.js','MistralTXT.js','requesty.js','AWSBedrock.js']) {
  assert.match(readFileSync(new URL('../../../journal/js/'+file,import.meta.url),'utf8'),/resolveCommonNoteInputs\(app\)/);
 }
});
test('supplementary defaults on, respects manual opt-out, and restored presets cannot disable it', () => {
 const src=readFileSync(new URL('../../../journal/js/features/editor-tools.js',import.meta.url),'utf8');
 const code=src.slice(src.indexOf('    // Always enabled on opening;'),src.indexOf('    // Note Auto-clear toggle'));
 const toggle={checked:false},field={value:'Synthetic supplement'};let click;
 vm.runInNewContext(code,{document:{getElementById:()=>toggle,addEventListener:(_,fn)=>click=fn},supplementaryInfoEl:field,resetSupplementaryTextareaSticky:()=>field.value=''});
 assert.equal(toggle.checked,true);assert.equal(field.value,'Synthetic supplement');
 click({target:{id:'startButton'}});assert.equal(field.value,'');
 toggle.checked=false;field.value='Retain';click({target:{id:'startButton'}});assert.equal(field.value,'Retain');
 const presets=readFileSync(new URL('../../../journal/js/features/workspace-presets.js',import.meta.url),'utf8');
 const apply=presets.slice(presets.indexOf('  Object.entries({ ...checks'),presets.indexOf('  await applyConfiguredAutoCopyMode'));
 for(const stored of [false,true]) {
  toggle.checked=false;
  vm.runInNewContext(apply,{checks:{autoClearSupplementaryToggle:stored},doc:{getElementById:()=>({type:'checkbox',set checked(v){toggle.checked=v;}})},win:{},dispatchChange(){}});
  assert.equal(toggle.checked,true);
 }
});

test('new and legacy-empty workspaces receive baseline without replacing custom rules', () => {
 memory();
 const fields={transcription:{value:'Syntetisk samtale om PRP'},generatedNote:{value:'Behold'},customPrompt:{value:''}};
 globalThis.document={getElementById:id=>fields[id]};
 for(const custom of ['', 'Behold min egen regel']) {
  saveMasterRules(custom);
  const resolved=resolveCommonNoteInputs({});
  assert.match(resolved.promptText,/NORDLYS GRUNNSTANDARD/);
  assert.match(resolved.promptText,/Ikke fyll manglende indikasjon/);
  assert.match(resolved.promptText,/ikke en særskilt PRP-bestemmelse/);
  assert.equal(readMasterRules(),custom);
  if(custom) assert.ok(resolved.promptText.includes(custom));
 }
});
