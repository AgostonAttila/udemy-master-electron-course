// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.


//const remote =require('electron').remote
//console.log(remote);

//const {dialog} =require('electron').remote
//betöltés előtt lefut már
//dialog.showMessageBox({message:'Dialog created via renderer.js',buttons:['OK']})

//const {dialog,BrowserWindow} =require('electron').remote
//let win = new BrowserWindow({width:400,height:600})
//win.loadURL('https://google.com')

//const remote =require('electron').remote
//console.log(remote.getGlobal('app_version'));

const {dialog,app} = require('electron').remote
dialog.showMessageBox({message:'Quit',buttons:['OK','NO']},(buttonIndex)=>{
  if(buttonIndex ===0) app.quit()
})
