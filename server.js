// Server
var io1 = require('socket.io').listen(8080);

io1.on('connection', function(socket1) {
    socket1.on('blockchain', function(msg1) {
        console.log(msg1);
    });
});