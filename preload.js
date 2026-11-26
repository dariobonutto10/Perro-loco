const { contextBridge, ipcRenderer } = require('electron');
contextBridge.exposeInMainWorld('puppy', {
  close: () => ipcRenderer.send('puppy:close'),
  toggleTop: () => ipcRenderer.send('puppy:toggle-top'),
  contextMenu: () => ipcRenderer.send('puppy:context-menu')
});
