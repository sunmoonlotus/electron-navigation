const {
    app,
    BrowserWindow
} = require('electron');

let demoLight;
let demoDark;

app.on('ready', () => {

    demoLight = new BrowserWindow();
    demoLight.setTitle('horizontal demo');
    demoLight.setMenu(null);
    demoLight.loadURL('file://' + __dirname + '/demo-light.html');
    demoLight.on('close', () => {demoLight = null;});

    demoDark = new BrowserWindow();
    demoDark.setTitle('vertical demo');
    demoDark.setMenu(null);
    demoDark.loadURL('file://' + __dirname + '/demo-dark.html');
    demoDark.on('close', () => {demoDark = null;});

});