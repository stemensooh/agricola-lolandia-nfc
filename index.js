
//checking correct usage of application => node application.js <CON#>
if (process.argv[2] == undefined){
    global.console.log("Usage: node application.js <COM#>");
    process.exit();
}
module.exports.PortCom = process.argv[2];
//end checking correct usage for arduino COM


// /****** Require all dependand modules */
const path = require('path');
const express = require('express');

const app = express();
const server = require('http').createServer(app);
module.exports.io = require('socket.io')(server);
// /****** Require all dependand modules */

app.use(express.static(path.resolve( __dirname, 'public' )));
server.listen(4000, (err) => {
    if ( err ) throw new Error(err);
    console.log('Servidor en puerto 4000');
});

require('./sockets/socket');
require('./serialport/serialport');

// const SerialPort = require('serialport').SerialPort;
// const { DelimiterParser } = require('@serialport/parser-delimiter');

// const port = new SerialPort({ 
//     path: 'COM3', 
//     baudRate: 9600
// });

// const parser = port.pipe(new DelimiterParser({delimiter: '\r\n'}));

// parser.on('open', function() {
//     console.log('connection is opened');
// });

// parser.on('data', function (data)  {
//     console.log(data.toString());
//     module.exports.io.emit('arduinoMessage', data.toString());
//     // var enc = new TextDecoder();
//     // var arr = new Uint8Array(data);
//     // const ready = enc.decode(arr);

//     // console.log(ready);
// });

// parser.on('error', (err) => console.log(err));
// port.on('error', (err) => console.log(err));







