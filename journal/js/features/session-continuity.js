// Reuse the existing browser session without persisting credentials to disk.
// Only top-level Nordlys pages participate; workspace frames already share sessionStorage.
(() => {
  if (window.parent !== window || typeof BroadcastChannel === 'undefined') return;
  const keys = ['openai_api_key','soniox_api_key','mistral_api_key','requesty_api_key','bedrock_backend_url','bedrock_backend_secret'];
  const settings = ['soniox_region','transcribe_provider','note_provider','note_provider_mode','openai_model'];
  const channel = new BroadcastChannel('nordlys-journal-session-v1');
  const requestId = crypto.randomUUID();
  const get = key => { try { return sessionStorage.getItem(key) || ''; } catch { return ''; } };
  let accepted = false;
  function restored() {
    window.dispatchEvent(new Event('nordlys-session-restored'));
    for (const frame of document.querySelectorAll('iframe')) {
      try { frame.contentWindow.dispatchEvent(new frame.contentWindow.Event('nordlys-session-restored')); } catch {}
    }
  }
  channel.onmessage = ({data}) => {
    if (!data || typeof data !== 'object') return;
    if (data.type === 'request' && typeof data.id === 'string') {
      const values = Object.fromEntries(keys.map(key => [key,get(key)]).filter(([,value])=>value));
      if (Object.keys(values).length) channel.postMessage({type:'response',id:data.id,values,settings:Object.fromEntries(settings.map(key=>[key,get(key)]).filter(([,value])=>value))});
    } else if (data.type === 'response' && data.id === requestId && !accepted && data.values && typeof data.values === 'object') {
      if (!keys.some(key=>typeof data.values[key]==='string' && data.values[key])) return;
      accepted = true;
      for (const key of keys) if (!get(key) && typeof data.values[key] === 'string' && data.values[key].length < 10000) sessionStorage.setItem(key,data.values[key]);
      for (const key of settings) if (!get(key) && typeof data.settings?.[key] === 'string' && data.settings[key].length < 200) sessionStorage.setItem(key,data.settings[key]);
      restored();
    }
  };
  // Requests contain no credentials; responses go only to same-origin live contexts.
  if (!keys.some(key=>get(key))) channel.postMessage({type:'request',id:requestId});
  window.addEventListener('pagehide',()=>channel.close(),{once:true});
})();
