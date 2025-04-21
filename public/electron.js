const { app, BrowserWindow } = require('electron');
const path = require('path');

function createWindow () {
  const win = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: {
      nodeIntegration: false
    }
  });

  win.loadURL('http://localhost:3000');
}

app.whenReady().then(() => {
  const exec = require('child_process').exec;
  exec('npm start'); // Start React app
  setTimeout(createWindow, 5000); // Wait for React to start
});
