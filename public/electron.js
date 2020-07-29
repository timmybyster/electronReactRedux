const {
  app,
  BrowserWindow,
} = require("electron")
const path = require('path');
const isDev = require('electron-is-dev');
const eventHandler = require('./server/eventHandler');

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    icon: path.join(__dirname, './favicon.ico'),
    webPreferences: {
      nodeIntegration: true,
    },
    frame: true
  })

  mainWindow.loadURL(
    isDev
      ? 'http://localhost:3000'
      : `file://${path.join(__dirname, '../build/index.html')}`,
  )

  mainWindow.maximize();

  mainWindow.on('closed', () => {
    mainWindow = null
  })
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow()
  }
})

eventHandler.start();