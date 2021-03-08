import createDb from './db'

const ipcRenderer = window.ipcRenderer
let interval

function loop (db) {
  console.log(db)
}

(async function () {
  const db = await createDb()
  
  ipcRenderer.on('start', () => {
    if (interval) return
    interval = setInterval(() => {
      loop(db)
    }, 3000)
  })
  ipcRenderer.on('stop', () => {
    clearInterval(interval)
    interval = undefined
  })
})()
