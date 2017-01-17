const {
    app,
    BrowserWindow
} = require('electron');

let demoLight;
let demoDark;
let demoCustom;

app.on('ready', () => {

    demoLight = new BrowserWindow();
    demoLight.setTitle('horizontal demo');    
    demoLight.loadURL('file://' + __dirname + '/demo-light.html');
    demoLight.on('close', () => {demoLight = null;});

    demoDark = new BrowserWindow();
    demoDark.setTitle('vertical demo');    
    demoDark.loadURL('file://' + __dirname + '/demo-dark.html');
    demoDark.on('close', () => {demoDark = null;});

    demoCustom = new BrowserWindow();
    demoCustom.setTitle('custom demo');    
    demoCustom.loadURL('file://' + __dirname + '/demo-custom.html');
    demoCustom.on('close', () => {demoCustom = null;});

});