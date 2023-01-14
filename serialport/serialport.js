const { io 
    , PortCom
} = require('../index');

const SerialPort = require('serialport').SerialPort;
const { DelimiterParser } = require('@serialport/parser-delimiter');

const port = new SerialPort({ 
    path: PortCom, 
    baudRate: 9600
});

const parser = port.pipe(new DelimiterParser({delimiter: '\r\n'}));

parser.on('open', function() {
    console.log('connection is opened');
});

parser.on('data', function (data)  {
    console.log(data.toString());
    io.emit('arduinoMessage', data.toString());
    // var enc = new TextDecoder();
    // var arr = new Uint8Array(data);
    // const ready = enc.decode(arr);

    // console.log(ready);
});

parser.on('error', (err) => console.log(err));
port.on('error', (err) => console.log(err));