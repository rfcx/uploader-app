import { app, protocol } from 'electron'
import installExtension, { VUEJS_DEVTOOLS } from 'electron-devtools-installer'
import init from './init'
import createPrimaryWindow from './primaryWindow'

// Scheme must be registered before the app is ready
protocol.registerSchemesAsPrivileged([
  { scheme: 'app', privileges: { secure: true, standard: true } }
])

// Quit when all windows are closed.
app.on('window-all-closed', () => {
  app.quit()
})

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', async () => {
  if (!process.env.IS_TEST) {
    // Install Vue Devtools
    try {
      await installExtension(VUEJS_DEVTOOLS)
    } catch (e) {
      console.error('Vue Devtools failed to install:', e.toString())
    }
  }
  await init(app)
  createPrimaryWindow()
})

// Exit cleanly on request from parent process in development mode.
if (process.platform === 'win32') {
  process.on('message', (data) => {
    if (data === 'graceful-exit') {
      app.quit()
    }
  })
} else {
  process.on('SIGTERM', () => {
    app.quit()
  })
}
