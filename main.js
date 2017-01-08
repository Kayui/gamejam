const electron = require('electron');
const appi = require('./app.js');

// In the main process.
const BrowserWindow = electron.BrowserWindow;
const app = electron.app;
var mainWindow = null;

app.on('window-all-closed', function () {
  if (process.platform != 'darwin') {
    app.quit();
  }
});
app.on('ready', function () {
  console.log(__dirname + '\favicon.ico');
  mainWindow = new BrowserWindow({ width: 800, height: 600, icon: __dirname + '/icons/icon.ico' });
  mainWindow.setMenu(null);
  mainWindow.loadURL('http://localhost:8080');

  mainWindow.on('closed', function () {
  mainWindow = null;
  });
});
