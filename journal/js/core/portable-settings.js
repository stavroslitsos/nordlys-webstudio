import { TEMPLATE_STORAGE_KEY, validateTemplates, mergeTemplates } from './clinical-templates.js?v=20261030b';
export const WORKSPACES_KEY = 'whisper_workspace_presets_v1';
const valueIds = ['transcribeProvider','sonioxSpeakerLabels','sonioxRegion','noteProvider','noteProviderMode','openaiModel','bedrockModel','requestyModel','gpt5Reasoning','requestyNanoReasoning','promptSlot','autoCopyModeSelect','secondaryProvider','secondaryMode','secondaryOpenaiModel','secondaryOpenaiReasoning','secondaryBedrockModel','secondaryRequestyModel','secondaryNanoReasoning','secondaryPromptSelect'];
const checkIds = ['autoClearSupplementaryToggle','supplementaryDateToggle','autoClearNoteToggle','autoGenerateToggle','includePromptToggle','secondarySourceDateToggle','secondaryAutoTransferToggle','secondaryClearOnGenerateToggle'];
const preferenceKeys = ['siteLanguage','auto_clear_note','nordlys_google_client_id'];
export function cleanConfig(config) {
 const safe={values:{},checks:{},panes:{}};
 for(const id of valueIds)if(Object.hasOwn(config?.values||{},id))safe.values[id]=String(config.values[id]??'').slice(0,300);
 for(const id of checkIds)if(Object.hasOwn(config?.checks||{},id))safe.checks[id]=Boolean(config.checks[id]);
 if(Object.hasOwn(config?.panes||{},'secondaryNoteOpen'))safe.panes.secondaryNoteOpen=Boolean(config.panes.secondaryNoteOpen);
 return safe;
}
export function validatePortableSettings(data) {
 if(!data || typeof data!=='object' || Array.isArray(data))throw Error('Ugyldig oppsett for maler og arbeidsrom.');
 const safe={};
 if(Object.hasOwn(data,'templates'))safe.templates=validateTemplates(data.templates);
 if(Object.hasOwn(data,'workspaces')){
  if(!Array.isArray(data.workspaces)||data.workspaces.length>12)throw Error('Oppsettet kan ha høyst 12 arbeidsrom.');
  safe.workspaces=data.workspaces.map((row,i)=>({name:String(row?.name||`Workspace ${i+1}`).slice(0,120),config:cleanConfig(row?.config)}));
 }
 if(Object.hasOwn(data,'preferences'))safe.preferences=Object.fromEntries(preferenceKeys.filter(k=>typeof data.preferences?.[k]==='string').map(k=>[k,data.preferences[k].slice(0,300)]));
 return safe;
}
export function readPortableSettings(storage=localStorage) {
 return validatePortableSettings({templates:JSON.parse(storage.getItem(TEMPLATE_STORAGE_KEY)||'[]'),workspaces:JSON.parse(storage.getItem(WORKSPACES_KEY)||'[]'),preferences:Object.fromEntries(preferenceKeys.map(k=>[k,storage.getItem(k)]))});
}
export function applyPortableSettings(data,storage=localStorage) {
 const safe=validatePortableSettings(data);
 // Missing fields in old backups must never erase libraries on this machine.
 // Merge libraries so a backup from an empty/new machine cannot remove existing templates.
 if(safe.templates){const current=validateTemplates(JSON.parse(storage.getItem(TEMPLATE_STORAGE_KEY)||'[]'));storage.setItem(TEMPLATE_STORAGE_KEY,JSON.stringify(mergeTemplates(current,safe.templates)));}
 if(safe.workspaces?.length)storage.setItem(WORKSPACES_KEY,JSON.stringify(safe.workspaces.map(row=>({...row,id:crypto.randomUUID()}))));
 for(const [key,value]of Object.entries(safe.preferences||{}))storage.setItem(key,value);
 return safe;
}
