export const FILE_LIMIT = 20 * 1024 * 1024;
export const PAGE_LIMIT = 30;
export function fileKind(file) {
  if (file.size > FILE_LIMIT) throw Error('Filen er større enn 20 MB.');
  const name = file.name.toLowerCase();
  if (/\.pdf$/.test(name) || file.type === 'application/pdf') return 'pdf';
  if (/\.(png|jpe?g|webp|bmp|gif)$/.test(name)) return 'image';
  if (/\.(txt|md|csv|json|log)$/.test(name) || /^text\//.test(file.type)) return 'text';
  throw Error('Bruk PDF, PNG, JPG, WebP eller en tekstfil. HEIC og Word må først lagres som PDF.');
}
export function pdfText(items) {
  let text = '';
  for (const item of items) if (typeof item.str === 'string') text += item.str + (item.hasEOL ? '\n' : ' ');
  return text.replace(/[ \t]+\n/g,'\n').trim();
}
export function sourceBlock(name, text, ocr = false) {
  const safeName = String(name).replace(/[\r\n<>]/g,' ').slice(0,250);
  return `Vedlagt kildedokument: ${safeName}${ocr ? ' (tekst lest fra bilde – kontroller mot original)' : ''}\n${text.trim()}\nSlutt på vedlagt kildedokument.`;
}
export function appendSource(existing, source) {
  return [existing.trimEnd(), source].filter(Boolean).join('\n\n');
}
