import { PromptManager } from './js/promptManager.js';
const keyNames=['soniox_api_key','openai_api_key','mistral_api_key','requesty_api_key','bedrock_backend_url','bedrock_backend_secret'];
export function setupBundle(keys, region, prompts) {
 const cleanKeys=Object.fromEntries(keyNames.map(name=>[name,typeof keys?.[name]==='string'?keys[name]:'']));
 if(!Object.values(cleanKeys).some(Boolean))throw new Error('Legg inn eller importer API-nøklene først.');
 const cleanPrompts=PromptManager.validatePromptImportBundle(prompts);
 if(!Object.values(cleanPrompts.slots).some(value=>value.trim()))throw new Error('Legg inn minst én prompt før du lagrer samlet oppsett.');
 return {schema:'nordlys.setup',version:1,keys:cleanKeys,region:region==='global'?'global':'eu',prompts:cleanPrompts};
}
export function validateSetupBundle(data) {
 if(data?.schema!=='nordlys.setup'||data.version!==1)throw new Error('Ukjent format for samlet oppsett.');
 return setupBundle(data.keys,data.region,data.prompts);
}
