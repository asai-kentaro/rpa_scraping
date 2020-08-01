const electron = require('electron')
const app = electron.app
const ipcMain = electron.ipcMain
const screen = electron.screen
const BrowserWindow = electron.BrowserWindow

let mainWindow = null

app.allowRendererProcessReuse = false

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
})

const openMain = () => {
  mainWindow = new BrowserWindow({
    width: 400,
    height: 400,
    webPreferences: {
      nodeIntegration: true,
    },
  })
  mainWindow.loadURL('file://' + __dirname + '/src/main/index.html')
  mainWindow.on('closed', () => {
    mainWindow = null;
  })
}

app.on('ready', () => {
  openMain()
})
