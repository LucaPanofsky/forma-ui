window.fixiCfg = { transition: null };

document.addEventListener("DOMContentLoaded", () => {
  new MutationObserver((records) => {
    if (!window._hyperscript) return;
    for (const record of records)
      for (const node of record.addedNodes)
        if (node.nodeType === Node.ELEMENT_NODE)
          window._hyperscript.processNode(node);
  }).observe(document.documentElement, { childList: true, subtree: true });
});
