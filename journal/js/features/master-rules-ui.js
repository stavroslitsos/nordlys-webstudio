import { MASTER_RULES_KEY, readMasterRules, saveMasterRules } from '../core/master-rules.js?v=20261016-helfo';
import { JOURNAL_STANDARD_SECTIONS, JOURNAL_STANDARD_SOURCES } from '../core/journal-standard.js?v=20261016-helfo';

const standard = document.getElementById('journalStandard');
if (standard) {
  for (const {title, text} of JOURNAL_STANDARD_SECTIONS) {
    const section = document.createElement('details');
    const heading = document.createElement('summary');
    heading.textContent = title;
    section.append(heading);
    for (const paragraph of text.split('\n')) {
      const p = document.createElement('p'); p.textContent = paragraph; section.append(p);
    }
    standard.append(section);
  }
  const sources = document.createElement('details');
  const heading = document.createElement('summary'); heading.textContent = 'Kilder og dato'; sources.append(heading);
  const date = document.createElement('p'); date.textContent = 'Kontrollert 16.10.2026. Rundskrivets faglige endring: 09.10.2026. Ingen automatisk oppdatering av regelverket.'; sources.append(date);
  const list = document.createElement('ul');
  for (const [title, url] of JOURNAL_STANDARD_SOURCES) {
    const item = document.createElement('li'); const link = document.createElement('a');
    link.textContent = title; link.href = url; link.target = '_blank'; link.rel = 'noopener noreferrer';
    item.append(link); list.append(item);
  }
  sources.append(list); standard.append(sources);
}

const button = document.getElementById('btnRules');
const view = document.getElementById('rulesView');
const editor = document.getElementById('masterRulesText');
const status = document.getElementById('masterRulesStatus');
const save = document.getElementById('masterRulesSave');
let baseline = '';
let dirty = false;

function updateButton() {
  try {
    readMasterRules();
    const active = true;
    button?.classList.toggle('nj-rules-active', active);
    if (button) button.title = active ? 'Felles regler brukes ved all primær notatgenerering' : 'Legg inn felles regler for journalføring';
  } catch { if (button) button.title = 'Reglene kan ikke leses fra nettleseren'; }
}

button?.addEventListener('click', () => {
  for (const id of ['guideView', 'newsView', 'pricesView', 'billingLinksView']) {
    const overlay = document.getElementById(id);
    overlay?.classList.remove('active');
    overlay?.setAttribute('aria-hidden', 'true');
  }
  dirty = false;
  try {
    baseline = readMasterRules();
    editor.value = baseline;
    editor.disabled = false;
    save.disabled = false;
    status.textContent = baseline.trim() ? 'Grunnstandard og egne tillegg er aktive i alle arbeidsrom.' : 'Grunnstandarden er aktiv. Ingen egne tillegg lagret.';
  } catch {
    editor.value = '';
    editor.disabled = true;
    save.disabled = true;
    status.textContent = 'Kunne ikke lese reglene. Kontroller at nettleseren tillater lokal lagring.';
  }
  if (!view.open) view.showModal();
  editor.focus();
});
editor?.addEventListener('input', () => {
  dirty = editor.value !== baseline;
  status.textContent = dirty ? 'Ulagrede endringer – trykk Lagre regler for å ta dem i bruk.' : 'Ingen ulagrede endringer.';
});
save?.addEventListener('click', () => {
  try {
    if (readMasterRules() !== baseline) {
      status.textContent = 'Reglene er endret i en annen fane. Kopier dine endringer, lukk og åpne Regler på nytt før du lagrer.';
      return;
    }
    saveMasterRules(editor.value);
    baseline = editor.value;
    dirty = false;
    status.textContent = baseline.trim() ? 'Lagret. Grunnstandard og tillegg brukes fra neste generering i alle arbeidsrom.' : 'Lagret. Grunnstandarden er fortsatt aktiv.';
    updateButton();
  } catch {
    status.textContent = 'Kunne ikke lagre reglene. Endringene er fortsatt i tekstfeltet; prøv igjen eller kopier teksten før du lukker.';
  }
});
function requestClose(event) {
  if (dirty && !window.confirm('Lukke uten å lagre endringene i Regler?')) {
    event?.preventDefault();
    return;
  }
  view.close();
}
document.getElementById('masterRulesClose')?.addEventListener('click', requestClose);
view?.addEventListener('cancel', (event) => { event.preventDefault(); requestClose(event); });
view?.addEventListener('close', () => button?.focus());
window.addEventListener('storage', (event) => {
  if (event.key !== MASTER_RULES_KEY && event.key !== null) return;
  updateButton();
  if (view?.open) status.textContent = 'Reglene er endret i en annen fane. Lukk og åpne Regler for å se siste versjon.';
});
updateButton();
