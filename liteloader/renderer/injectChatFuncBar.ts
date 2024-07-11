import iconHtml from '../../misc/logo.svg?raw';

// reference https://github.com/xtaw/LiteLoaderQQNT-Fake-Message/blob/master/src/renderer.js#L72
export const injectChatFuncBarObserver = new MutationObserver( (mutations) => {
  for (const mutation of mutations) {
    for (const node of mutation.addedNodes) {
      if (node.nodeType === Node.ELEMENT_NODE) {
        const element = node as Element;
        if (element.classList.contains('chat-func-bar')) {
          const funcBar = element.getElementsByTagName('div')[0];
          if (funcBar) {
            const lastElementChild = funcBar.lastElementChild;
            if (lastElementChild) {
              const openButton = lastElementChild.cloneNode(true) as Element;
              const iconItem = openButton.querySelector('div.icon-item');
              if (iconItem) {
                iconItem.id = 'id-func-bar-neko-image-r';
                iconItem.setAttribute('aria-label', 'NekoImageR');
              }
              const icon = openButton.getElementsByTagName('i')[0];
              icon.innerHTML = iconHtml;
              openButton.addEventListener('click', () => {
                window.NekoImageR.openWindow();
              });
              funcBar.appendChild(openButton);
            }
          }
        }
      }
    }
  }
});
