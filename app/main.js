const {app,BrowserWindow} = require("electron");

let window = null;
app.on("ready",() => {
    window = new BrowserWindow({
        show: false
    });

    window.loadURL(`file://${__dirname}/ui/login.html`);
    window.on('ready-to-show',() => {
        window.show();
        console.log(__dirname);        
    });
});