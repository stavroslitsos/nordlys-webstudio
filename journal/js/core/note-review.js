// Separate documentation questions from the clinical text without discarding them.
export const REVIEW_HEADING = 'Må avklares før signering';
export function splitNoteReview(value) {
  const text = String(value ?? '').replace(/\r\n/g, '\n');
  const lines = text.split('\n');
  const heading = /^\s*(?:#{1,6}\s+)?(?:\*\*|__)?Må avklares før signering(?:\*\*|__)?\s*:?(?:\*\*|__)?\s*(.*)$/i;
  const note = [], review = [];
  let inReview = false, found = false;
  for (const line of lines) {
    const match = line.match(heading);
    if (match) { found = inReview = true; if (match[1]) review.push(match[1]); continue; }
    // Preserve a following explicitly titled clinical section in older outputs.
    if (inReview && (/^\s*#{1,6}\s+\S/.test(line) || /^\s*(?:\*\*|__)[^*_]+(?:\*\*|__)\s*:?\s*$/.test(line) || /^(?:Plan|Vurdering|Undersøkelse|Anamnese|Aktuelt|Behandling|Oppfølging)\s*:\s*$/i.test(line))) inReview = false;
    (inReview ? review : note).push(line);
  }
  return { note: found ? note.join('\n').trim() : text, review: review.join('\n').trim(), found };
}
export function syncNoteReview(doc, { replace = false } = {}) {
  const field = doc.getElementById('generatedNote');
  const review = doc.getElementById('noteReviewText');
  const panel = doc.getElementById('noteReviewPanel');
  if (!field || !review || !panel) return { note: String(field?.value || ''), review: '', fullText: String(field?.value || '') };
  const parts = splitNoteReview(field.value);
  if (parts.found) field.value = parts.note;
  if (parts.found || replace) review.value = parts.review;
  panel.hidden = !review.value.trim();
  const note = String(field.value || '');
  const reviewText = String(review.value || '');
  return { note, review: reviewText, fullText: reviewText.trim() ? `${note}\n\n${REVIEW_HEADING}:\n${reviewText}` : note };
}
