// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

const{ipcRenderer} = require('electron')

//elküldi és nincs callback
//Send message to main process on channel1
ipcRenderer.send('channel2','Hello from the renderer')

setTimeout(()=>{
  ipcRenderer.send('ch1',{close:true}})
} ,4000)



ipcRenderer.on('channel1',(e,args)=>{
console.log(args);
})

ipcRenderer.on('channel2',(e,args)=>{
console.log(args);
})


ipcRenderer.on('private',(e,args)=>{
console.log(args);
})


let mainResponse = ipcRenderer.sendSync('sync-channel',{name:'Jani',surname:'Vmi'})
console.log(mainResponse);
