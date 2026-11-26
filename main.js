const { app, BrowserWindow, ipcMain, Menu, screen } = require('electron');
const path = require('path');

let win;
function createWindow() {
  const { workArea } = screen.getPrimaryDisplay();
  const width = 360;
  const height = 360;
  win = new BrowserWindow({
    width, height,
    x: Math.max(0, workArea.x + workArea.width - width - 28),
    y: Math.max(0, workArea.y + workArea.height - height - 24),
    frame: false,
    transparent: true,
    backgroundColor: '#00000000',
    resizable: false,
    maximizable: false,
    minimizable: true,
    fullscreenable: false,
    alwaysOnTop: true,
    skipTaskbar: true,
    hasShadow: false,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      contextIsolation: true,
      nodeIntegration: false,
      sandbox: true
    }
  });
  win.setAlwaysOnTop(true, 'floating');
  win.setVisibleOnAllWorkspaces(true, { visibleOnFullScreen: true });
  win.loadFile('index.html');
  win.on('closed', () => { win = null; });
}

app.whenReady().then(createWindow);
app.on('window-all-closed', () => app.quit());
app.on('activate', () => { if (!win) createWindow(); });

ipcMain.on('puppy:close', () => app.quit());
ipcMain.on('puppy:toggle-top', () => {
  if (!win) return;
  const next = !win.isAlwaysOnTop();
  win.setAlwaysOnTop(next, next ? 'floating' : 'normal');
});
ipcMain.on('puppy:context-menu', () => {
  if (!win) return;
  const menu = Menu.buildFromTemplate([
    { label: 'Labrador de Escritorio', enabled: false },
    { type: 'separator' },
    { label: 'Siempre visible', type: 'checkbox', checked: win.isAlwaysOnTop(), click: () => {
      const next = !win.isAlwaysOnTop();
      win.setAlwaysOnTop(next, next ? 'floating' : 'normal');
    } },
    { label: 'Centrar en pantalla', click: () => {
      const { workArea } = screen.getDisplayMatching(win.getBounds());
      const b = win.getBounds();
      win.setPosition(Math.round(workArea.x + (workArea.width - b.width) / 2), Math.round(workArea.y + (workArea.height - b.height) / 2));
    } },
    { type: 'separator' },
    { label: 'Salir', click: () => app.quit() }
  ]);
  menu.popup({ window: win });
});
