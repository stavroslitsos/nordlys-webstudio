import { PAGE_LIMIT, fileKind, pdfText, sourceBlock, appendSource } from '../core/supplementary-files.js?v=20261112-files';
import { registerWorkspaceDisposer } from '../core/workspace-disposal.js';
const field = document.getElementById('supplementaryInfo');
const toggle = document.getElementById('toggleRedactorButton');
if (field && toggle) {
  const button = document.createElement('button');
  button.type='button';button.id='supplementaryFileButton';button.textContent='Legg ved fil';
  button.style.cssText='padding:4px 10px;font-size:12px;border-radius:6px;background:#2563eb';
  toggle.after(button);
  const input=document.createElement('input');input.type='file';input.multiple=true;input.hidden=true;
  input.accept='.pdf,.png,.jpg,.jpeg,.webp,.bmp,.gif,.txt,.md,.csv,.json,text/plain,application/pdf,image/png,image/jpeg';
  input.id='supplementaryFileInput';button.after(input);
  const dialog=document.createElement('dialog');dialog.setAttribute('aria-label','Les vedlegg');
  dialog.style.cssText='width:min(760px,90vw);max-height:85vh;box-sizing:border-box;border:1px solid #ccd6e0;border-radius:12px;padding:20px;color:#17334c';
  dialog.innerHTML='<h3 style="margin-top:0">Les vedlegg</h3><p>Teksten leses i nettleseren. Kontroller lesingen, særlig tall og datoer. Når du legger teksten til, brukes den som kilde ved neste notatgenerering.</p><p role="status" aria-live="polite"></p><label>Tekst fra vedlegg<textarea style="width:100%;box-sizing:border-box;min-height:260px" spellcheck="false"></textarea></label><div style="display:flex;gap:8px;flex-wrap:wrap"><button type="button" data-add disabled>Legg til i supplerende informasjon</button><button type="button" data-close>Avbryt</button></div>';
  document.body.append(dialog);
  const status=dialog.querySelector('[role=status]'), preview=dialog.querySelector('textarea');
  const add=dialog.querySelector('[data-add]'), close=dialog.querySelector('[data-close]');
  let token=0, worker=null, pdfTask=null, busy=false;
  function notify(message){status.textContent=message;}
  function ensure(current){if(current!==token)throw new DOMException('Avbrutt','AbortError');}
  async function cancel(){token++;busy=false;button.disabled=false;const old=worker;worker=null;await old?.terminate().catch(()=>{});const task=pdfTask;pdfTask=null;await task?.destroy().catch(()=>{});}
  function dismiss(){void cancel();dialog.close();preview.value='';}
  close.addEventListener('click',dismiss);
  dialog.addEventListener('cancel',event=>{event.preventDefault();dismiss();});
  registerWorkspaceDisposer(()=>cancel());
  button.addEventListener('click',()=>input.click());
  async function ocr(image,current,allowBlank=false) {
    ensure(current);
    if(!window.Tesseract)throw Error('Bildelesing kunne ikke lastes. Prøv å laste siden på nytt etter opptaket.');
    if(!worker){const created=await window.Tesseract.createWorker('nor+eng',1,{logger:message=>{if(current===token && message.status==='recognizing text')notify(`Leser bilde: ${Math.round((message.progress||0)*100)} %`);}});if(current!==token){await created.terminate();ensure(current);}worker=created;}
    const result=await worker.recognize(image);ensure(current);
    const text=(result.data.text||'').trim();
    if(!text && !allowBlank)throw Error('Fant ingen lesbar tekst. Prøv et skarpere bilde.');
    return text;
  }
  async function readPdf(file,current) {
    const pdfjs=await import('../../vendor/pdfjs-6.5.438/pdf.min.mjs');ensure(current);
    pdfjs.GlobalWorkerOptions.workerSrc=new URL('../../vendor/pdfjs-6.5.438/pdf.worker.min.mjs',import.meta.url).href;
    const task=pdfjs.getDocument({data:new Uint8Array(await file.arrayBuffer()),isEvalSupported:false,enableXfa:false,useSystemFonts:true});
    pdfTask=task;let pdf;try {
      pdf=await task.promise;ensure(current);
      if(pdf.numPages>PAGE_LIMIT)throw Error(`PDF-en har ${pdf.numPages} sider. Del den i filer med høyst ${PAGE_LIMIT} sider.`);
      const pages=[];let usedOcr=false,readCharacters=0;
      for(let n=1;n<=pdf.numPages;n++) {
        ensure(current);notify(`Leser ${file.name}, side ${n} av ${pdf.numPages} …`);
        const page=await pdf.getPage(n);let text=pdfText((await page.getTextContent()).items);
        if(text.replace(/\s/g,'').length<20){
          usedOcr=true;const base=page.getViewport({scale:1});const viewport=page.getViewport({scale:Math.min(2,2200/Math.max(base.width,base.height))});
          const canvas=document.createElement('canvas');canvas.width=Math.ceil(viewport.width);canvas.height=Math.ceil(viewport.height);
          try{await page.render({canvasContext:canvas.getContext('2d'),viewport}).promise;ensure(current);text=await ocr(canvas,current,true);}finally{canvas.width=0;canvas.height=0;}
        }
        readCharacters+=text.length;pages.push(`Side ${n}:\n${text || "[Ingen lesbar tekst på denne siden.]"}`);page.cleanup();
      }
      if(!readCharacters)throw Error('Fant ingen lesbar tekst i PDF-en.');
      return {text:pages.join('\n\n'),ocr:usedOcr};
    } finally {if(pdfTask===task)pdfTask=null;await task.destroy().catch(()=>{});}
  }
  input.addEventListener('change',async()=>{
    const files=[...input.files];input.value='';if(!files.length)return;
    if(files.length>10){notify('Velg høyst 10 filer om gangen.');dialog.showModal();return;}
    await cancel();const current=token;busy=true;button.disabled=true;add.disabled=true;preview.value='';dialog.showModal();
    const results=[],failures=[];
    try{
      for(const file of files){
        ensure(current);notify(`Leser ${file.name} …`);
        try{
          const kind=fileKind(file);let result;
          if(kind==='pdf')result=await readPdf(file,current);
          else if(kind==='image')result={text:await ocr(file,current),ocr:true};
          else {const text=await file.text();if(text.includes('\u0000'))throw Error('Dette ser ikke ut som en vanlig tekstfil. Lagre den som PDF eller UTF-8-tekst.');result={text,ocr:false};}
          ensure(current);if(!result.text.trim())throw Error('Filen inneholder ingen lesbar tekst.');
          if(result.text.length>200000)throw Error('Teksten er for lang. Del dokumentet i mindre filer.');
          results.push(sourceBlock(file.name,result.text,result.ocr));
        }catch(error){if(current!==token)throw error;failures.push(`${file.name}: ${error.name==='PasswordException'?'PDF-en er passordbeskyttet. Bruk en ulåst kopi.':error.message}`);}
      }
      ensure(current);preview.value=results.join('\n\n');add.disabled=!results.length;
      notify(`${results.length} av ${files.length} filer lest.${failures.length?' Ikke lagt til: '+failures.join(' | '):' Kontroller teksten før du legger den til.'}`);
    }catch(error){if(current===token)notify(error.message);}
    finally{if(current===token){busy=false;button.disabled=false;const old=worker;worker=null;await old?.terminate().catch(()=>{});}}
  });
  add.addEventListener('click',()=>{
    if(busy || !preview.value.trim())return;
    field.value=appendSource(field.value,preview.value);
    field.dispatchEvent(new Event('input',{bubbles:true}));field.dispatchEvent(new Event('change',{bubbles:true}));
    dismiss();field.focus();
  });
}
