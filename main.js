const {app, BrowserWindow} = require('electron');
const path = require('path');
const { setMainMenu } = require('./main-menu.js');

let mainWindow;

app.on('ready', () => {
  mainWindow = new BrowserWindow({
    height: 600,
    width: 800
  });


  mainWindow.loadURL(path.join('file://', __dirname, 'index.html'));

  setMainMenu(mainWindow);

});
