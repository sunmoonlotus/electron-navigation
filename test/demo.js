const {
    app,
    BrowserWindow
} = require('electron');

let win;

app.on('ready', () => {

    win = new BrowserWindow({
        width: 800,
        height: 600
    });

    win.setMenu(null);

    win.loadURL('file://' + __dirname + '/demo.html');

    win.on('closed', () => {
        win = null;
    });

});