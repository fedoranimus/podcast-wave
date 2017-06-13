import {app, BrowserWindow} from 'electron';
let win = null;

app.on('ready', () => {
    win = new BrowserWindow();
    win.setBound({ x: 0, y: 0, width: 100, height: 100 });
})