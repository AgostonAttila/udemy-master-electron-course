const electron = require('electron')
// Module to control application life.
const app = electron.app
// Module to create native browser window.
const BrowserWindow = electron.BrowserWindow

const fs= require('fs')

app.disableHardwareAcceleration()

let bgWin

app.on('ready',()=>{

bgWin = new BrowserWindow({
  show: false,
  width:1200,
  height:800,
  webPreferences:{
    offscreen: true
  }
})


bgWin.loadURL('https:/github.com')
/*
bgWin.webContents.on('did-finish-load',()=>{
  console.log(bgWin.getTitle());
  app.quit()
})*/
let i = 1

bgWin.webContents.on('paint',(e,dirtyArea,nativeImage)=>{
  let img = nativeImage.toPNG()
  fs.writeFile('c:/Users/Developer/Desktop/screenshot_${i}.png',img)
  i++
})

})
