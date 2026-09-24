import { GOOGLE_CLIENT_ID } from "./nordlys-google-config.js";
const input = document.getElementById('client-id');
const status = document.getElementById('status');
try { input.value = localStorage.getItem('nordlys_google_client_id') || GOOGLE_CLIENT_ID; } catch {}
document.getElementById('drive-config').addEventListener('submit', event => {
  event.preventDefault();
  const id = input.value.trim();
  if (!/^[0-9]+-[a-zA-Z0-9_-]+\.apps\.googleusercontent\.com$/.test(id)) {
    status.textContent = 'Dette ser ikke ut som en Google OAuth-klient-ID. Kopier hele ID-en fra Google Cloud.';
    return;
  }
  try {
    localStorage.setItem('nordlys_google_client_id', id);
    status.textContent = 'Oppsettet er lagret i denne nettleseren. Last arbeidsrommet på nytt for å bruke Google Drive. Innlogging og tilkobling er ikke testet ennå.';
  } catch { status.textContent = 'Nettleseren kunne ikke lagre oppsettet.'; }
});
