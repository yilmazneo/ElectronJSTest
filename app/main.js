const {app,BrowserWindow} = require("electron");

var printer = require('printer');
console.log(printer.getPrinters());

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