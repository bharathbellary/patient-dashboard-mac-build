// electron.js
const { app, BrowserWindow } = require('electron');
const path = require('path');

function createWindow() {
  const win = new BrowserWindow({
    width: 1024,
    height: 768,
    webPreferences: {
      nodeIntegration: true,
    },
  });

  // Load React build (after npm run build)
  win.loadFile(path.join(__dirname, 'build', 'index.html'));
}

app.whenReady().then(createWindow);
