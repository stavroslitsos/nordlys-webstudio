function configure(){
 document.title='Nordlys Journal · Arbeidsrom';
 const back=document.getElementById('backToHomeButton');if(back)back.textContent='Nøkler og oppsett';
 // Keep local import/export while making unconfigured cloud choices unambiguous.
 for(const el of document.querySelectorAll('button[id*="OneDrive"]')){el.disabled=true;el.hidden=true;el.title='Bruk lokal JSON-fil. Skykopi krever eget oppsett.';}
 for(const el of document.querySelectorAll('option')){if(/GDPR/i.test(el.textContent))el.textContent=el.textContent.replace(/\s*\([^)]*GDPR[^)]*\)/gi,'');}
 const guide=document.getElementById('guideText');if(guide&&!guide.querySelector('.nordlys-local-note')){const note=document.createElement('p');note.className='nordlys-local-note';note.textContent='Nordlys Journal 0.1: Bruk JSON-filer eller Google Drive for maler og arbeidsoppsett. Google Drive krever eget oppsett og et sikkerhetskopipassord. Auto-copy krever en separat utvidelse; manuell kopiering er tilgjengelig.';guide.prepend(note);}
}
configure();window.addEventListener('transcribe-language-updated',configure);window.addEventListener('load',configure);
// Cloud actions are also blocked at the exported integration boundary.
document.addEventListener('click',event=>{const button=event.target.closest('button');if(button&&/OneDrive/.test(button.id)){event.preventDefault();event.stopImmediatePropagation();}},true);
// Optional WebMCP: expose only non-sensitive UI state and a navigation action.
if(document.modelContext?.registerTool){
 const lifetime=new AbortController();
 const tools=[{name:'read_workspace_configuration',title:'Les arbeidsromsoppsett',description:'Returnerer valgte leverandører og modell, uten nøkler, transkripsjon eller journalinnhold.',inputSchema:{type:'object',properties:{},additionalProperties:false},annotations:{readOnlyHint:true,untrustedContentHint:false},execute(input){if(!input||Object.keys(input).length)throw new Error('Ingen argumenter forventet.');return{transcriptionProvider:document.getElementById('transcribeProvider')?.value,noteProvider:document.getElementById('noteProvider')?.value,model:document.getElementById('openaiModel')?.value};}},{name:'open_workspace_guide',title:'Åpne veiledning',description:'Åpner veiledningen i arbeidsrommet. Starter ikke opptak eller generering.',inputSchema:{type:'object',properties:{},additionalProperties:false},annotations:{readOnlyHint:false,untrustedContentHint:false},execute(input){if(!input||Object.keys(input).length)throw new Error('Ingen argumenter forventet.');document.getElementById('btnGuide')?.click();return{opened:true};}}];
 for(const tool of tools){try{Promise.resolve(document.modelContext.registerTool(tool,{signal:lifetime.signal})).catch(()=>{});}catch{}}
 window.addEventListener('pagehide',()=>lifetime.abort(),{once:true});
}


// Keep the actual controls in their workspace document so provider handlers,
// persisted settings and concurrent workspaces continue to use the same nodes.
function compactWorkspaceSettings(){
 if(!document.documentElement.classList.contains('workspace-preset-frame'))return;
 const recording=document.querySelector('.recording-area');
 const controls=document.querySelector('.nj-recording-controls');
 if(!recording||!controls||document.querySelector('.nj-settings-dock'))return;
 const dock=document.createElement('section');
 dock.className='nj-settings-dock';
 dock.setAttribute('aria-label','Opptaks- og notatinnstillinger');
 recording.before(dock);
 dock.append(controls);
 const note=document.createElement('div');
 note.className='nj-note-settings';
 const label=document.createElement('strong');label.textContent='Notat';
 note.append(label);
 for(const id of ['note-provider-container','gpt5-reasoning-container','requesty-nano-reasoning-container']){
  const el=document.getElementById(id);if(el)note.append(el);
 }
 dock.append(note);
 const card=document.querySelector('.nj-input-card');
 const recordingActions=document.getElementById('startButton')?.parentElement;
 if(card&&recordingActions){
  recordingActions.classList.add('nj-recording-actions');
  card.append(recordingActions);
  const status=document.getElementById('statusMessage');if(status)card.append(status);
 }
 const noteHeader=document.getElementById('noteGenerationTitle')?.parentElement;
 if(noteHeader){
  noteHeader.classList.add('nj-note-heading');
  noteHeader.querySelector('.bottom-section-header-spacer')?.remove();
  const actions=document.getElementById('noteActionButtons');
  const utility=document.getElementById('noteTimer')?.parentElement;
  if(actions)noteHeader.append(actions);
  if(utility){utility.classList.add('nj-note-utility');noteHeader.append(utility);}
 }
 const promptHeader=document.getElementById('customPromptTitle')?.parentElement;
 const backupRow=document.querySelector('.prompt-backup-row');
 if(promptHeader&&backupRow){promptHeader.append(backupRow);promptHeader.classList.add('nj-prompt-heading');}

}
compactWorkspaceSettings();
window.addEventListener('load',compactWorkspaceSettings);

function showKeyRestore(){
 if(document.documentElement.classList.contains('workspace-preset-frame'))return;
 if(document.getElementById('nj-key-restore'))return;
 if(sessionStorage.getItem('soniox_api_key')&&sessionStorage.getItem('openai_api_key'))return;
 const top=document.querySelector('.top-bar');if(!top)return;
 const notice=document.createElement('div');notice.id='nj-key-restore';notice.className='nj-key-restore';notice.setAttribute('role','status');
 const message=document.createElement('span');message.textContent='API-nøkler mangler i denne faneøkten. Hent dem fra Google Drive før opptak eller notatgenerering.';
 const link=document.createElement('a');link.href='./index.html?restore=drive';link.textContent='Importer nøkler fra Google Drive';
 notice.append(message,link);top.after(notice);
}
showKeyRestore();window.addEventListener('load',showKeyRestore);


// Apply compact visible wording to dynamic timer/button labels without replacing controls.
function installCompactLabels(){
 const ids=['noteGenerationTitle','generateNoteButton','abortNoteButton','nj-transcript-label','copyNoteButton','miniPanelToggleButton'];
 const replacements=[['Notatgenerering','Notat'],['Generer notat','Generer'],['Generate Note','Generer'],['Abort Note','Abort'],['Samtaletekst','Samtale'],['Fullføringstimer','Tid'],['Completion Timer','Tid'],['Note Generation Timer','Tid'],['Mini-panel','Panel'],['Copy','Kopier']];
 const roots=ids.map(id=>document.getElementById(id)).filter(Boolean);
 const panel=document.querySelector('button[aria-label="Open mini panel"]');if(panel&&!roots.includes(panel))roots.push(panel);
 const apply=()=>{for(const root of roots){const walker=document.createTreeWalker(root,NodeFilter.SHOW_TEXT);let n;while((n=walker.nextNode())){let text=n.nodeValue;for(const [from,to] of replacements)text=text.replaceAll(from,to);if(text!==n.nodeValue)n.nodeValue=text;}}};
 apply();
 const observer=new MutationObserver(apply);
 for(const root of roots)observer.observe(root,{subtree:true,childList:true,characterData:true});
 window.addEventListener('pagehide',()=>observer.disconnect(),{once:true});
}
installCompactLabels();
