const { ipcMain } = require('electron');

const EVENT_PING = "EVENT_PING";

module.exports = {start};

function start(){
    
    ipcMain.on(EVENT_PING, (event, arg) => {
        event.reply(EVENT_PING + '_REPLY', {err: null, result: "PONG"});
    });

}