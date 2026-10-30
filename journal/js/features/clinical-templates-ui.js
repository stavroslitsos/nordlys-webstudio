import { TEMPLATE_STORAGE_KEY, validateTemplates, mergeTemplates, insertTemplate } from '../core/clinical-templates.js?v=20261030b';
const field = document.getElementById('supplementaryInfo');
if (field) {
  let library = [];
  const panel = document.createElement('div'); panel.className = 'nj-template-picker';
  const style = document.createElement('style');
  style.textContent = `.nj-template-picker{margin:8px 0 12px;padding:10px;border:1px solid #d5e1ed;border-radius:8px;background:#f5f9fd;font-size:13px}.nj-template-row{display:flex;gap:8px;align-items:center;flex-wrap:wrap}.nj-template-picker select{flex:1;min-width:170px;max-width:100%;padding:6px}.nj-template-picker button{background:#2563eb;color:white;border:0;border-radius:5px;padding:6px 10px;cursor:pointer}.nj-template-picker button:disabled{background:#94a3b8;cursor:default}.nj-template-confirm{display:block;margin:8px 0}.nj-template-confirm[hidden]{display:none}.nj-template-confirm input{margin-right:6px}.nj-template-picker summary{cursor:pointer;margin-top:8px}.nj-template-picker textarea,.nj-template-picker input[type=text]{box-sizing:border-box;width:100%;margin:5px 0;padding:7px}.nj-template-picker textarea{min-height:160px}.nj-template-status{display:block;margin-top:6px;color:#334155}.nj-template-hint{margin:6px 0;color:#475569}`;
  document.head.append(style);
  panel.innerHTML = `<div class="nj-template-row"><label for="clinicalTemplateSelect">Maler og fraser</label><select id="clinicalTemplateSelect" aria-label="Velg mal eller frase"></select><button type="button" id="clinicalTemplateInsert">Sett inn</button></div><label class="nj-template-confirm" hidden><input id="clinicalTemplateConfirmed" type="checkbox">Undersøkelsen er utført; øvrige tester er ua</label><p class="nj-template-hint">Valgt mal legges til i Supplerende informasjon. Behold og tilpass aktuelle funn der.</p><details><summary>Administrer maler</summary><p>Biblioteket lagres i denne nettleseren. Ta en maleksport for bruk på en annen maskin. Legg bare generelle maler her, uten pasientopplysninger.</p><div class="nj-template-row"><button type="button" id="clinicalTemplateImport">Importer maler</button><button type="button" id="clinicalTemplateExport">Eksporter maler</button><button type="button" id="clinicalTemplateNew">Ny mal</button></div><details><summary>Importer fra tekst</summary><label>Malbibliotek som JSON<textarea id="clinicalTemplateImportText" spellcheck="false"></textarea></label><button type="button" id="clinicalTemplateImportTextButton">Importer teksten</button></details><input type="file" id="clinicalTemplateFile" accept="application/json,.json" hidden><label>Malnavn<input id="clinicalTemplateName" type="text" maxlength="200"></label><label>Type<select id="clinicalTemplateKind"><option value="examination">Klinisk undersøkelse</option><option value="phrase">Annen frase</option></select></label><label>Region<input id="clinicalTemplateRegion" type="text" maxlength="200"></label><label>Maltekst<textarea id="clinicalTemplateText" spellcheck="false"></textarea></label><button type="button" id="clinicalTemplateSave">Lagre mal</button></details><span class="nj-template-status" role="status" aria-live="polite"></span>`;
  document.getElementById('supplementaryRedactorLayout')?.before(panel);
  const el = id => panel.querySelector('#'+id);
  const select = el('clinicalTemplateSelect'), confirmed = el('clinicalTemplateConfirmed');
  const status = text => { panel.querySelector('[role=status]').textContent=text; };
  const selected = () => library.find(row => row.id === select.value);
  let creating = false;
  function editor() {
    const row = selected(); creating=false; confirmed.checked=false;
    confirmed.parentElement.hidden=row?.kind!=='examination';
    el('clinicalTemplateInsert').disabled=!row;
    el('clinicalTemplateName').value=row?.name||'';
    el('clinicalTemplateKind').value=row?.kind||'examination';
    el('clinicalTemplateRegion').value=row?.region||'';
    el('clinicalTemplateText').value=row?.text||'';
  }
  function render(preferred=select.value) {
    select.replaceChildren();
    const empty=document.createElement('option');empty.value='';empty.textContent=library.length?'Velg mal …':'Importer ditt malbibliotek …';select.append(empty);
    for(const [kind,label] of [['examination','Klinisk undersøkelse'],['phrase','Øvrige fraser']]) {
      const group=document.createElement('optgroup');group.label=label;
      for(const row of library.filter(r=>r.kind===kind).sort((a,b)=>a.name.localeCompare(b.name,'nb'))) {
        const option=document.createElement('option');option.value=row.id;option.textContent=row.name;group.append(option);
      }
      if(group.children.length)select.append(group);
    }
    select.value=preferred;editor();
  }
  function load(){try {library=validateTemplates(JSON.parse(localStorage.getItem(TEMPLATE_STORAGE_KEY)||'[]'));render();}catch(e){status(e.message);}}
  function save(rows,preferred){const valid=validateTemplates(rows);localStorage.setItem(TEMPLATE_STORAGE_KEY,JSON.stringify(valid));library=valid;render(preferred);}
  select.addEventListener('change',editor);
  el('clinicalTemplateInsert').addEventListener('click',()=>{
    const row=selected();if(!row)return;
    field.value=insertTemplate(field.value,row,confirmed.checked);
    field.dispatchEvent(new Event('input',{bubbles:true}));field.dispatchEvent(new Event('change',{bubbles:true}));
    confirmed.checked=false;status(`${row.name} lagt til i Supplerende informasjon.`);
  });
  el('clinicalTemplateImport').addEventListener('click',()=>el('clinicalTemplateFile').click());
  el('clinicalTemplateFile').addEventListener('change',async event=>{
    try{const file=event.target.files[0];if(!file)return;if(file.size>5000000)throw Error('Malfilen er for stor.');const incoming=validateTemplates(JSON.parse(await file.text()));save(mergeTemplates(library,incoming));status(`${incoming.length} maler importert. Biblioteket har ${library.length} maler.`);}catch(e){status(`Import stoppet: ${e.message}`);}finally{event.target.value='';}
  });
  el('clinicalTemplateImportTextButton').addEventListener('click',()=>{try{const incoming=validateTemplates(JSON.parse(el('clinicalTemplateImportText').value));save(mergeTemplates(library,incoming));el('clinicalTemplateImportText').value='';status(`${incoming.length} maler importert. Biblioteket har ${library.length} maler.`);}catch(e){status(`Import stoppet: ${e.message}`);}});
  el('clinicalTemplateExport').addEventListener('click',()=>{
    const blob=new Blob([JSON.stringify({schema:'nordlys-clinical-templates',version:1,templates:library},null,2)],{type:'application/json'});
    const a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download='nordlys-maler.json';a.click();setTimeout(()=>URL.revokeObjectURL(a.href),1000);
  });
  el('clinicalTemplateNew').addEventListener('click',()=>{select.value='';editor();creating=true;el('clinicalTemplateName').focus();});
  el('clinicalTemplateSave').addEventListener('click',()=>{
    try{const old=creating?null:selected();const row={id:old?.id||crypto.randomUUID(),shortcut:old?.shortcut||'',name:el('clinicalTemplateName').value,text:el('clinicalTemplateText').value,kind:el('clinicalTemplateKind').value,region:el('clinicalTemplateRegion').value||el('clinicalTemplateName').value};save(mergeTemplates(library,[row]),row.id);status('Mal lagret i denne nettleseren.');}catch(e){status(e.message);}
  });
  window.addEventListener('storage',event=>{if(event.key===TEMPLATE_STORAGE_KEY)load();});
  load();
}
