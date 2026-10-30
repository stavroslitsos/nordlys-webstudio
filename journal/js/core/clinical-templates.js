// Library contents belong to the user's browser, never to the public repository.
export const TEMPLATE_STORAGE_KEY = 'nordlys_clinical_templates_v1';
export const NORMAL_FINDINGS = '* Øvrige tester i valgt mal er utført og ua (uten funn).';
export function validateTemplates(data) {
  const rows = Array.isArray(data) ? data : data?.templates;
  if (!Array.isArray(rows) || rows.length > 300) throw new Error('Velg en malfil med høyst 300 maler.');
  const ids = new Set();
  return rows.map(row => {
    if (!row || typeof row.name !== 'string' || !row.name.trim() || typeof row.text !== 'string' || !row.text.trim()) throw new Error('Hver mal må ha navn og tekst.');
    const shortcut = String(row.shortcut || '').trim();
    const id = String(row.id || shortcut || row.name).trim();
    if (ids.has(id)) throw new Error('Malfilen inneholder duplikate mal-ID-er.');
    ids.add(id);
    if (row.text.length > 100000 || row.name.length > 200 || id.length > 250) throw new Error('En mal er for lang.');
    return { id, name: row.name.trim(), shortcut, text: row.text, kind: row.kind === 'examination' ? 'examination' : 'phrase', region: String(row.region || row.name).slice(0,200) };
  });
}
export function mergeTemplates(current, incoming) {
  const map = new Map(validateTemplates(current).map(row => [row.id,row]));
  for (const row of validateTemplates(incoming)) map.set(row.id,row);
  return [...map.values()];
}
export function insertTemplate(existing, template, confirmed = false) {
  const row = validateTemplates([template])[0];
  let text = row.text;
  let heading = `Frasemal – ${row.name} (tilpasses aktuelle pasientopplysninger)`;
  if (row.kind === 'examination') {
    // The original footer is kept in the library; each insertion needs a fresh confirmation.
    text = text.replace(/^\s*\*Alle tester ført opp er utført\.[^\n]*(?:\n|$)/gmi, '').trim();
    text = text.replace(/^\s*\* Øvrige tester i valgt mal er utført og ua \(uten funn\)\.\s*$/gm, '').trim();
    heading = `Klinisk undersøkelse av ${row.region}`;
    text += confirmed ? `\n\n${NORMAL_FINDINGS}` : '\n\nMal – utførelse og normale funn er ikke bekreftet.';
  }
  return [existing.trimEnd(), `${heading}\n${text}`].filter(Boolean).join('\n\n');
}
