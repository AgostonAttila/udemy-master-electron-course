modul.exports = [
  {
    label:'Electron',
    submenu: [
      {label:'Item 1'},
      {label:'Item 2'}
    ]
  },
  {
label:'Actions',
submenu: [
  {
    label:'Greet',
    submenu:[
      { label:'Greet Bob', click: ()=>{console.log('Hello Bob')},accelerator:'Shift+Alt+G',enable:false}
      { label:'Greet Pete', click: ()=>{console.log('Hello Pete')},accelerator:'Shift+Alt+B'}
    ]
  },
  {
label:'Toggle Developer Tools',
role:'toggledevtools'
  },
  {
    role:'togglefullscreen'
  }
]
  },
  {
label:'Edit',
submenu:[
  {role:'copy'},
    {role:'paste'},
      {role:'undo'},
        {role:'redo'}
]

  }
]
