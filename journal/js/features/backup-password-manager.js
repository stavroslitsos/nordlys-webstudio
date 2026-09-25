// Passwords are handed only to the browser's password manager, after a
// successful backup operation. Never persist them in localStorage or logs.
export function addPasswordManagerFields(form, identity) {
  form.autocomplete = 'on';
  const label = document.createElement('label');
  label.textContent = 'Navn i passordbehandler';
  const username = document.createElement('input');
  username.type = 'text'; username.name = 'username';
  username.id = `${form.id}-username`; username.autocomplete = 'username';
  username.tabIndex = -1;
  username.value = identity; username.defaultValue = identity; username.readOnly = true;
  username.style.cssText = 'width:100%;box-sizing:border-box;font-size:12px;margin:4px 0 10px';
  label.htmlFor = username.id;
  const choice = document.createElement('label');
  choice.style.cssText = 'display:flex;align-items:center;gap:8px;font-size:12px;margin:12px 0';
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox'; checkbox.checked = true; checkbox.defaultChecked = true;
  checkbox.style.cssText = 'width:auto;margin:0';
  choice.append(checkbox, 'Tilby å lagre passordet i nettleserens passordbehandler');
  const password = form.querySelector('input[type="password"]');
  const before = password && (form.querySelector(`label[for="${password.id}"]`) || password);
  if (before) { before.before(label, username); } else { form.prepend(label, username); }
  const actions = form.querySelector('.dialog-actions, .prompt-backup-modal__actions');
  if (actions) actions.before(choice); else form.append(choice);
  return { identity, checkbox };
}

export async function offerPasswordSave(manager, password) {
  if (!manager?.checkbox.checked || !password || !globalThis.isSecureContext ||
      !globalThis.PasswordCredential || !globalThis.navigator?.credentials?.store) return;
  try {
    const credential = new PasswordCredential({
      id: manager.identity, name: manager.identity, password,
    });
    await navigator.credentials.store(credential);
  } catch {
    // Unsupported/disabled managers must not turn a successful backup into an error.
  }
}
