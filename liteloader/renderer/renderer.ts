// First, add ChatFuncBar observer, iframe and button will inject here
import {injectChatFuncBarObserver} from './injectChatFuncBar.ts';

injectChatFuncBarObserver.observe(document.body, {
  childList: true,
  subtree: true,
  attributes: true
});
