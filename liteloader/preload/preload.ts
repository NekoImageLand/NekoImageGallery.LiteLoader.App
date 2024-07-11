import { contextBridge, ipcRenderer } from 'electron';

contextBridge.exposeInMainWorld('NekoImageR', {
  openWindow: (name: string) => {
    ipcRenderer.send('LiteLoader.NekoImageR.openWindow', name);
  }
});
