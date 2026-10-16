import { MASTER_RULES_KEY, readMasterRules, saveMasterRules } from '../core/master-rules.js';

const button = document.getElementById('btnRules');
const view = document.getElementById('rulesView');
const editor = document.getElementById('masterRulesText');
const status = document.getElementById('masterRulesStatus');
const save = document.getElementById('masterRulesSave');
let baseline = '';
let dirty = false;

function updateButton() {
  try {
    const active = Boolean(readMasterRules().trim());
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
    status.textContent = baseline.trim() ? 'Lagrede regler er aktive i alle arbeidsrom.' : 'Ingen regler er lagret ennå.';
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
    status.textContent = baseline.trim() ? 'Lagret. Reglene brukes fra neste generering i alle arbeidsrom.' : 'Lagret. Ingen felles regler er aktive.';
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
