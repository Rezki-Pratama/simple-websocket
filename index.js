const express = require('express')
const socket = require('socket.io')

//Setup
const app = express()
const server = app.listen(4000, ()=>{
    console.log('Listen to request on port 4000')
})

//Static
app.use(express.static('public'))

//Socket
const io = socket(server)

io.on('connection', (socket)=>{
    
    console.log('made socket connection', socket.id)

    // Handle chat event
    socket.on('chat', function(data){
        // console.log(data);
        io.sockets.emit('chat', data);
    });

    // Handle typing event
    socket.on('typing', function(data){
        socket.broadcast.emit('typing', data);
    });
})