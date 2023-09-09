//This file will be communicating through server (observer's side). 

//this will receive connection requests: 
module.exports.chatSockets = function(socketServer){

    let io = require('socket.io')(socketServer);

    io.sockets.on('connection',function(socket){
        console.log("New connection received!!",socket.id);
    })

    io.sockets.on('disconnect',function(){
        console.log("Connection is disconnected!!");
    })
}