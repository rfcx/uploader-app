import createBackgroundWindow from './backgroundWindow'
import { ipcMain } from 'electron'

/**
 * Common initialization for the app
 * @param {*} app 
 */
// eslint-disable-next-line no-unused-vars
export default async function (_app) {
  const bg = await createBackgroundWindow()

  ipcMain.on('start', () => {
    bg.webContents.send('start')
  })

  ipcMain.on('stop', () => {
    bg.webContents.send('stop')
  })
}