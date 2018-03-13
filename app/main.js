const {app,BrowserWindow} = require("electron");

const sqlite3 = require("sqlite3");
console.log(sqlite3);
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