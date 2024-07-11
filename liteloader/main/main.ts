import { ipcMain, BrowserWindow } from 'electron';
import path from 'path';
import url from 'url';


// eslint-disable-next-line @typescript-eslint/no-misused-promises,@typescript-eslint/no-unused-vars
ipcMain.on('LiteLoader.NekoImageR.openWindow', async (_: Electron.IpcMainEvent) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const newWin = new BrowserWindow({
    width: 1000,
    height: 800,
    webPreferences: {
      nodeIntegration: true
    }
  });
  const startUrl = url.format({
    pathname: path.join(__dirname, './dist/index.html'),
    protocol: 'file:',
    slashes: true,
  });
  console.log("start at", startUrl)
  newWin.webContents.openDevTools();
  await newWin.loadURL(startUrl);
});

