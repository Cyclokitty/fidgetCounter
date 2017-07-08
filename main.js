const {app, BrowserWindow, ipcMain} = require('electron');
const path = require('path');
const { setMainMenu } = require('./main-menu.js');

let windows = [];

function createWindow(browserWindowOpts) {
  const win = new BrowserWindow(Object.assign({
    height: 600,
    width: 800
  }, browserWindowOpts));

  win.loadURL(path.join('file://', __dirname, 'index.html'));
  windows.push(win);

  setMainMenu(win);

  win.on('close', () => {
    windows.splice(windows.indexOf(win), 1);
    sendWindowCount();
  })
};

function sendWindowCount() {
  windows.forEach(win => {
    win.webContents.send('window-count', {winCount: windows.length});
  });
}

app.on('ready', () => {
  ipcMain.on('create-window', (event, props) => createWindow(props));
  ipcMain.on('get-window-count', sendWindowCount);
  createWindow();
});
