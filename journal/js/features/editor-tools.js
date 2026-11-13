// Shared field controls: clear, copy, automatic clearing and optional date.
// Keeps page behavior unchanged while reducing page-owned runtime logic.




  // 3) Log pageview after DOM is ready + log clicks with provider context
  document.addEventListener('DOMContentLoaded', () => {
    // Optional: keep pageview lean (no provider fields)
    // Capture the "fresh page load" textarea heights so Clear can restore them.
    const captureDefaultHeight = (el) => {
      if (!el) return;
      const cs = window.getComputedStyle(el);
      // Prefer CSS min-height (your baseline), fall back to rendered height.
      const baseline =
        (cs.minHeight && cs.minHeight !== '0px') ? cs.minHeight :
        `${el.getBoundingClientRect().height}px`;
      el.dataset.defaultHeight = baseline;
    };

    const resetTextareaToDefault = (el) => {
      if (!el) return;
      el.value = '';
      el.scrollTop = 0;
      const baseline = el.dataset.defaultHeight;
      if (baseline) el.style.height = baseline;
      else el.style.height = '';
    };

    const SUPPLEMENTARY_DATE_TOGGLE_KEY = 'supplementary_date_enabled';

    const getTodaySupplementaryDateLine = () => {
      const dateStr = new Intl.DateTimeFormat('nb-NO', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
      }).format(new Date());
      return `Dagens dato er ${dateStr}`;
    };

    const isExactSupplementaryDateLine = (line) =>
      /^Dagens dato er \d{2}\.\d{2}\.\d{4}\s*$/i.test(String(line).trim());

    const normalizeSupplementaryDateLine = (text, { enabled } = {}) => {
      const normalized = String(text || '').replace(/\r\n/g, '\n');
      const lines = normalized.split('\n');
      const dateLine = getTodaySupplementaryDateLine();
      const bodyLines = lines.filter(
        (line) => !isExactSupplementaryDateLine(line)
      );
      const body = bodyLines.join('\n').replace(/^\n+/, '');

      if (!enabled) {
        return body;
      }

      // Keep one intentionally blank line between the sticky date and the
      // supplementary text. Preserve the same spacing even while the body is
      // empty so later typing or pasting starts below that blank line.
      return body ? `${dateLine}\n\n${body}` : `${dateLine}\n\n`;
    };

    const getSupplementaryDateToggleState = () => {
      const toggle = document.getElementById('supplementaryDateToggle');
      if (toggle && toggle.type === 'checkbox') {
        return !!toggle.checked;
      }
      try {
        return sessionStorage.getItem(SUPPLEMENTARY_DATE_TOGGLE_KEY) === '1';
      } catch (_) {
        return false;
      }
    };

    const syncSupplementaryStickyDate = ({ focus = false, resetView = false } = {}) => {
      if (!supplementaryInfoEl) return;
      const nextValue = normalizeSupplementaryDateLine(supplementaryInfoEl.value, {
        enabled: getSupplementaryDateToggleState(),
      });
      if (supplementaryInfoEl.value !== nextValue) {
        supplementaryInfoEl.value = nextValue;
        supplementaryInfoEl.dispatchEvent(new Event('input', { bubbles: true }));
      }
      // Visual reset (scroll-to-top + height baseline) is only desired for
      // explicit user actions like initial setup or toggling the Date
      // checkbox — NOT on every blur. On blur, the user has just been
      // interacting with the textarea (resizing, scrolling, editing) and
      // resetting visual state would fight against what they just did.
      if (resetView) {
        supplementaryInfoEl.scrollTop = 0;
        const baseline = supplementaryInfoEl.dataset.defaultHeight;
        if (baseline) supplementaryInfoEl.style.height = baseline;
        else supplementaryInfoEl.style.height = '';
      }
      if (focus) supplementaryInfoEl.focus();
    };

    const resetSupplementaryTextareaSticky = ({ focus = false } = {}) => {
      if (!supplementaryInfoEl) return;
      delete supplementaryInfoEl.dataset.preserveHistoricalDate;
      resetTextareaToDefault(supplementaryInfoEl);
      if (getSupplementaryDateToggleState()) {
        supplementaryInfoEl.value = normalizeSupplementaryDateLine('', { enabled: true });
      }
      supplementaryInfoEl.dispatchEvent(new Event('input', { bubbles: true }));
      if (focus) supplementaryInfoEl.focus();
    };

    const bindSupplementaryStickyDateBlur = () => {
      if (!supplementaryInfoEl || supplementaryInfoEl.dataset.stickyDateBlurBound === '1') return;
      supplementaryInfoEl.dataset.stickyDateBlurBound = '1';

      supplementaryInfoEl.addEventListener('input', (event) => {
        if (event.isTrusted) delete supplementaryInfoEl.dataset.preserveHistoricalDate;
      });

      supplementaryInfoEl.addEventListener('blur', () => {
        if (!getSupplementaryDateToggleState()) return;
        if (supplementaryInfoEl.dataset.preserveHistoricalDate === '1') return;
        syncSupplementaryStickyDate({ focus: false });
      });
    };

    
    const transcriptionEl = document.getElementById('transcription');
    const supplementaryInfoEl = document.getElementById('supplementaryInfo');
    captureDefaultHeight(transcriptionEl);
    captureDefaultHeight(supplementaryInfoEl);

    const clearSupplementaryButton = document.getElementById('clearSupplementaryButton');
    clearSupplementaryButton?.addEventListener('click', () => {
      resetSupplementaryTextareaSticky({ focus: false });
    });

    // Sticky date support for Supplementary information.
    const supplementaryDateToggle = document.getElementById('supplementaryDateToggle');
    const insertSupplementaryDateButton = document.getElementById('insertSupplementaryDateButton');

    if (supplementaryDateToggle && supplementaryDateToggle.type === 'checkbox') {
      try {
        if (sessionStorage.getItem(SUPPLEMENTARY_DATE_TOGGLE_KEY) == null) {
          sessionStorage.setItem(SUPPLEMENTARY_DATE_TOGGLE_KEY, '0');
        }
      } catch (_) {}

      supplementaryDateToggle.checked = getSupplementaryDateToggleState();
      syncSupplementaryStickyDate({ focus: false, resetView: true });

      supplementaryDateToggle.addEventListener('change', () => {
        if (supplementaryInfoEl) delete supplementaryInfoEl.dataset.preserveHistoricalDate;
        try {
          sessionStorage.setItem(
            SUPPLEMENTARY_DATE_TOGGLE_KEY,
            supplementaryDateToggle.checked ? '1' : '0'
          );
        } catch (_) {}
        syncSupplementaryStickyDate({ focus: supplementaryDateToggle.checked, resetView: true });
      });
    }

    // Back-compat: keep supporting the old Date button if it still exists.
    if (insertSupplementaryDateButton) {
      insertSupplementaryDateButton.addEventListener('click', () => {
        if (!supplementaryInfoEl) return;
        delete supplementaryInfoEl.dataset.preserveHistoricalDate;
        supplementaryInfoEl.value = normalizeSupplementaryDateLine(supplementaryInfoEl.value, {
          enabled: true,
        });
        supplementaryInfoEl.dispatchEvent(new Event('input', { bubbles: true }));
        supplementaryInfoEl.focus();
        const pos = getTodaySupplementaryDateLine().length;
        try { supplementaryInfoEl.setSelectionRange(pos, pos); } catch (_) {}
      });
    }

    bindSupplementaryStickyDateBlur();

    // Always enabled on opening; manual opt-out applies to this open workspace.
    const autoClearToggle = document.getElementById('autoClearSupplementaryToggle');
    if (autoClearToggle) autoClearToggle.checked = true;

    // When enabled: starting a new recording clears + resets Supplementary info,
    // while preserving the sticky date if that toggle is enabled.
    document.addEventListener('click', (e) => {
      const id = e.target && e.target.id;
      if (id !== 'startButton') return;
      if (!autoClearToggle || autoClearToggle.checked !== true) return;
      if (supplementaryInfoEl) resetSupplementaryTextareaSticky({ focus: false });
    }, true);

    // Note Auto-clear toggle (default OFF; persist in localStorage)
    const AUTO_CLEAR_NOTE_KEY = 'auto_clear_note';
    const autoClearNoteToggle = document.getElementById('autoClearNoteToggle');
    const generatedNoteFieldEl = document.getElementById('generatedNote');
    if (autoClearNoteToggle) {
      const stored = localStorage.getItem(AUTO_CLEAR_NOTE_KEY);
      autoClearNoteToggle.checked = stored === '1';
      autoClearNoteToggle.addEventListener('change', () => {
        localStorage.setItem(AUTO_CLEAR_NOTE_KEY, autoClearNoteToggle.checked ? '1' : '0');
      });
    }

    // When enabled: starting a new recording clears + resets Generated note.
    document.addEventListener('click', (e) => {
      const id = e.target && e.target.id;
      if (id !== 'startButton') return;
      if (!autoClearNoteToggle || autoClearNoteToggle.checked !== true) return;
      if (generatedNoteFieldEl) resetTextareaToDefault(generatedNoteFieldEl);
    }, true);

  // Copy button logic for transcription field (matches Generated Note copy behavior)
  const copyTranscriptionButton = document.getElementById('copyTranscriptionButton');
  if (copyTranscriptionButton) {
    const originalLabel = copyTranscriptionButton.textContent;
    copyTranscriptionButton.addEventListener('click', async () => {
      const trEl = document.getElementById('transcription');
      const value = (trEl?.value || '').trim();
      if (!value) return;
      try {
        await navigator.clipboard.writeText(value);
        copyTranscriptionButton.textContent = 'Copied';
        setTimeout(() => { copyTranscriptionButton.textContent = originalLabel; }, 1200);
      } catch (err) {
        // Fallback for older browsers / blocked clipboard permissions
        try {
          trEl?.focus();
          trEl?.select();
          document.execCommand('copy');
          copyTranscriptionButton.textContent = 'Copied';
          setTimeout(() => { copyTranscriptionButton.textContent = originalLabel; }, 1200);
        } catch (_) {
          console.warn('Copy failed', err);
        } finally {
          try { window.getSelection()?.removeAllRanges?.(); } catch (_) {}
        }
      }
    });
  }
  // Clear button logic for transcription field
  const clearTranscriptionButton = document.getElementById('clearTranscriptionButton');
  if (clearTranscriptionButton) {
    clearTranscriptionButton.addEventListener('click', () => {
      const trEl = document.getElementById('transcription');
      if (trEl) {
        resetTextareaToDefault(trEl);
      }
    });
  }
  });
