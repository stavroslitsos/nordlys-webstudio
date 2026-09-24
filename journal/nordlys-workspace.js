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
}
compactWorkspaceSettings();
window.addEventListener('load',compactWorkspaceSettings);
