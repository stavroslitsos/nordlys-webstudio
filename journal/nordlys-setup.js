import { CloudBackupSession } from './js/features/cloud-backup-session.js';
import { setupBundle, validateSetupBundle } from './nordlys-bundle.js';
import { addPasswordManagerFields, offerPasswordSave } from './js/features/backup-password-manager.js';
import { PromptCloudBackup } from './js/features/prompt-cloud-backup.js';
import { encryptKeys, decryptKeys } from './nordlys-crypto.js';
import { PromptManager } from './js/promptManager.js';
const fields = {soniox_api_key:'soniox-key',openai_api_key:'openai-key',mistral_api_key:'mistral-key',requesty_api_key:'requesty-key',bedrock_backend_url:'bedrock-url',bedrock_backend_secret:'bedrock-secret'};
const $ = id => document.getElementById(id);
const status = message => { $('setup-status').textContent=message; };
for (const [key,id] of Object.entries(fields)) $(id).value=sessionStorage.getItem(key)||'';
$('soniox-region').value=sessionStorage.getItem('soniox_region')||'eu';
if (!localStorage.getItem('siteLanguage')) localStorage.setItem('siteLanguage','no');
function values(){return Object.fromEntries(Object.entries(fields).map(([key,id])=>[key,$(id).value.trim()]));}
function persist(){
 for(const [key,value] of Object.entries(values())) {if(value)sessionStorage.setItem(key,value);else sessionStorage.removeItem(key);}
 sessionStorage.setItem('soniox_region',$('soniox-region').value);
 // The active recording adapter reads user_api_key; main.js updates it from its provider selection.
 sessionStorage.setItem('user_api_key',$('soniox-key').value.trim());
}
$('setup-form').addEventListener('submit',event=>{event.preventDefault();persist();location.href='./transcribe.html';});
for (const button of document.querySelectorAll('[data-reveal]')) button.addEventListener('click',()=>{const input=$(button.dataset.reveal);input.type=input.type==='password'?'text':'password';button.textContent=input.type==='password'?'Vis':'Skjul';button.setAttribute('aria-label',`${button.textContent} ${button.dataset.reveal.startsWith('soniox')?'Soniox':'OpenAI'}-nøkkel`);});
$('clear-keys').addEventListener('click',()=>{if(!confirm('Tømme nøklene i denne faneøkten? Sikkerhetskopier påvirkes ikke.'))return;for(const[key,id]of Object.entries(fields)){sessionStorage.removeItem(key);$(id).value='';}sessionStorage.removeItem('user_api_key');status('Nøklene er tømt.');});
function fill(data){const raw=data?.data||data;if(!raw||typeof raw!=='object'||!Object.keys(fields).some(key=>typeof raw[key]==='string'))throw new Error('Filen inneholder ingen gjenkjennelige API-nøkler.');for(const[key,id]of Object.entries(fields)){if(typeof raw[key]==='string')$(id).value=raw[key];}status('Nøkkelfeltene er fylt. Kontroller dem og åpne arbeidsrommet.');}
let pending=null;
const keyPasswordManager=addPasswordManagerFields($('backup-form'),'Nordlys Journal – API-nøkler');
let useSessionPassword=false;
const reusePasswordButton=document.createElement('button');
reusePasswordButton.type='button';reusePasswordButton.textContent='Bruk allerede opplåst Drive-passord';reusePasswordButton.hidden=true;
reusePasswordButton.style.cssText='margin:10px 0;padding:8px 12px;border:1px solid #a8d8cb;border-radius:6px;background:#eef8f5;color:#185b54';
$('backup-password').before(reusePasswordButton);
reusePasswordButton.addEventListener('click',()=>{
 if(CloudBackupSession.getPassword('googleDrive').length<12)return;
 useSessionPassword=true;$('backup-password').required=false;$('backup-confirm').required=false;
 $('backup-password').hidden=true;$('backup-confirm-wrap').hidden=true;
 reusePasswordButton.textContent='Bruker det opplåste Drive-passordet fra denne økten';reusePasswordButton.disabled=true;
});
function openBackup(mode){useSessionPassword=false;$('backup-password').hidden=false;$('backup-password').required=true;reusePasswordButton.disabled=false;reusePasswordButton.textContent='Bruk allerede opplåst Drive-passord';reusePasswordButton.hidden=mode!=='export'||CloudBackupSession.getPassword('googleDrive').length<12;$('legacy-prompt-password-wrap').hidden=mode!=='import';$('backup-form').reset();$('backup-error').textContent='';$('backup-confirm-wrap').hidden=mode==='import';$('backup-confirm').required=mode==='export';$('backup-password').minLength=mode==='export'?12:1;$('backup-password').autocomplete=mode==='export'?'new-password':'current-password';$('backup-title').textContent=mode==='export'?'Kryptert sikkerhetskopi':'Åpne kryptert nøkkelfil';$('backup-description').textContent=mode==='export'?'Velg minst 12 tegn. Passordet følger ikke med filen og kan ikke gjenopprettes.':'Skriv inn passordet du brukte da nøkkelfilen ble laget.';$('backup-submit').textContent=mode==='export'?'Last ned kryptert fil':'Åpne fil';$('backup-dialog').dataset.mode=mode;$('backup-dialog').showModal();$('backup-password').focus();}
$('export-keys').addEventListener('click',()=>{if(!Object.values(values()).some(Boolean)){status('Legg inn minst én nøkkel først.');return;}openBackup('export');});
$('import-keys').addEventListener('click',()=>$('key-file').click());
$('key-file').addEventListener('change',async()=>{try{const file=$('key-file').files[0];if(!file)return;if(file.size>1000000)throw new Error('Nøkkelfilen er for stor.');const data=JSON.parse(await file.text());if(data.format==='nordlys.keys.v1'){pending=data;openBackup('import');}else fill(data);}catch{status('Kunne ikke lese nøkkelfilen. Bruk JSON fra originalen eller en kryptert Nordlys-fil.');}finally{$('key-file').value='';}});
$('backup-cancel').addEventListener('click',()=>$('backup-dialog').close());
$('backup-dialog').addEventListener('close',()=>{$('backup-form').reset();pending=null;});
function currentBundle(){return setupBundle(values(),$('soniox-region').value,PromptManager.buildPromptExportBundle());}
function applyBundle(data){
 const bundle=validateSetupBundle(data);
 PromptManager.importPromptsFromBundle(bundle.prompts,{confirm:false});
 fill(bundle.keys);$('soniox-region').value=bundle.region;persist();updatePromptCount();
}
function updatePromptCount(){
 const bundle=PromptManager.buildPromptExportBundle();
 $('setup-prompt-count').textContent=Object.values(bundle.slots).filter(text=>text.trim()).length+' av 20 utfylt';
}
$('setup-import-prompts').addEventListener('click',()=>$('setup-prompt-file').click());
$('setup-prompt-file').addEventListener('change',async()=>{
 try{const file=$('setup-prompt-file').files[0];if(!file)return;if(file.size>1500000)throw new Error('Promptfilen er for stor.');
 const data=JSON.parse(await file.text());
 if(PromptManager.importPromptsFromBundle(data)){updatePromptCount();status('Promptene er importert. Eksporter til Drive for å lagre dem sammen med nøklene.');}
 }catch(error){status(error.message||'Kunne ikke lese promptfilen.');}finally{$('setup-prompt-file').value='';}
});
$('backup-form').addEventListener('submit',async event=>{
 event.preventDefault();const pass=useSessionPassword?CloudBackupSession.getPassword('googleDrive'):$('backup-password').value;
 const mode=$('backup-dialog').dataset.mode,cloud=mode.startsWith('drive-'),exporting=mode==='export'||mode==='drive-export';
 $('backup-error').textContent='';
 if(exporting&&!useSessionPassword&&pass!==$('backup-confirm').value){$('backup-error').textContent='Passordene er ikke like.';return;}
 $('backup-submit').disabled=true;
 try{
  if(cloud){
   // Open Google synchronously from the user's submit, before encryption work.
   const token=await PromptCloudBackup.connect('googleDrive');
   if(exporting){
    const bundle=currentBundle(),payload=await encryptKeys(bundle,pass);
    await PromptCloudBackup.saveEncryptedSetup(token,payload);
    const restored=validateSetupBundle(await decryptKeys(await PromptCloudBackup.loadEncryptedSetup(token),pass));
    if(JSON.stringify(restored)!==JSON.stringify(bundle))throw new Error('Kontroll av samlet kopi mislyktes.');
    persist();status('Nøkler og prompter er lagret sammen i Google Drive. Gjenoppretting er kontrollert.');
   }else{
    const combined=await PromptCloudBackup.loadEncryptedSetup(token);
    if(combined){applyBundle(await decryptKeys(combined,pass));status('Nøkler og prompter er hentet sammen. Åpne arbeidsrommet.');}
    else{
     const keys=await decryptKeys(await PromptCloudBackup.loadEncryptedKeys(token),pass);
     let legacy;
     try{legacy=await PromptCloudBackup.loadPackageWithAccessToken('googleDrive',token,$('legacy-prompt-password').value||pass);}
     catch{throw new Error('Fant den gamle nøkkelkopien, men kunne ikke åpne den gamle promptkopien. Hvis den har eget passord, fyll det inn under «Eldre kopier med ulike passord?». Ingen lokale nøkler eller prompter er erstattet.');}
     applyBundle(setupBundle(keys,$('soniox-region').value,legacy.promptBundle));
     status('Begge gamle kopier er hentet med én innlogging. Klikk «Eksporter til Drive» én gang for å lagre dem i ett dokument.');
    }
   }
  }else if(exporting){
   const payload=await encryptKeys(currentBundle(),pass);
   const url=URL.createObjectURL(new Blob([JSON.stringify(payload,null,2)],{type:'application/json'}));
   const a=document.createElement('a');a.href=url;a.download='nordlys-oppsett-kryptert.json';a.click();setTimeout(()=>URL.revokeObjectURL(url),2000);
   status('Samlet kryptert oppsett er lastet ned.');
  }else{const data=await decryptKeys(pending,pass);if(data?.schema==='nordlys.setup')applyBundle(data);else fill(data);}
  if(!useSessionPassword)await offerPasswordSave(keyPasswordManager,pass);$('backup-dialog').close();
 }catch(error){$('backup-error').textContent=error?.message||'Kunne ikke behandle sikkerhetskopien. Prøv igjen.';}
 finally{$('backup-submit').disabled=false;}
});
// Only initialize empty slots. Never replace the user's imported prompt library.
if(!localStorage.getItem('nordlys_prompt_seeded')){
 PromptManager.setPromptProfileId('default');
 const base='Skriv et presist norsk journalutkast basert bare på opplysningene i transkripsjonen og supplerende informasjon. Ikke legg til undersøkelser, negative funn, diagnoser, behandlinger eller samtykke som ikke er nevnt. Ved uklarhet, marker hva som må avklares. Bruk Pas som forkortelse. ';
 const seeds=[['Undersøkelse',base+'Struktur: Kort oversikt, Aktuelt/anamnese, Undersøkelse, Vurdering, Plan og tiltak. Ta med ultralydfunn bare når de er nevnt.'],['Behandling',base+'Struktur: Status siden sist, Utført behandling, Øvelser og dosering, Respons og videre plan.'],['Epikrise',base+'Struktur: Bakgrunn, Funn, Behandlingsforløp, Status og videre oppfølging.'],['Henvisning',base+'Struktur: Problemstilling, Relevant anamnese, Kliniske funn, Tidligere tiltak og ønsket vurdering.']];
 seeds.forEach(([name,prompt],i)=>{const slot=String(i+1);if(!PromptManager.getPrompt(slot)){PromptManager.savePrompt(slot,prompt);PromptManager.setSlotDisplayName(slot,name,'default');}});
 localStorage.setItem('nordlys_prompt_seeded','1');
}

async function openDriveKeys(exporting) {
 if(exporting&&!Object.values(values()).some(Boolean)){status('Importer nøkkelfilen din først.');return;}
 status('Klargjør Google-innlogging …');
 try {
  await PromptCloudBackup.prepareGoogleSignIn();
  openBackup(exporting?'export':'import');
  $('backup-dialog').dataset.mode=exporting?'drive-export':'drive-import';
  $('backup-title').textContent=exporting?'Lagre nøkler og prompter':'Hent nøkler og prompter';
  $('backup-description').textContent=exporting?'Minst 12 tegn. Nøkler og prompter lagres i én kryptert kopi. Forrige samlede kopi erstattes; gamle separate kopier beholdes.':'Skriv inn passordet til det samlede oppsettet. Ved første overgang fra eldre kopier bruker du nøkkelkopiens passord. Import erstatter nøkler og prompter i denne nettleseren.';
  $('backup-submit').textContent=exporting?'Lagre i Google Drive':'Hent fra Google Drive';
  status('');
 } catch(error){status(error.message);}
}
$('drive-save-keys').addEventListener('click',()=>openDriveKeys(true));
$('drive-load-keys').addEventListener('click',()=>openDriveKeys(false));

updatePromptCount();
// A workspace without session keys links directly to the Drive restore dialog.
if(new URLSearchParams(location.search).get('restore')==='drive')openDriveKeys(false);
