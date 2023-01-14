const { io } = require('../index');


// Mensajes de Sockets
io.on('connection', client => {
    console.log('Cliente conectado');
});