//This file will be communicating through server (observer's side). 

//this will receive connection requests: 
module.exports.chatSockets = function(socketServer){

    let io = require('socket.io')(socketServer);

    io.sockets.on('connection',function(socket){
        console.log("New connection received!!",socket.id);
        io.sockets.on('disconnect',function(){
            console.log("Connection is disconnected!!");
        })
        
        //chat-room joining request: 
        socket.on('join_room',function(data){
            console.log('Joining request rec.',data);
    
            socket.join(data.chatroom);

            io.in(data.chatroom).emit('user_joined',data);
        })

        //receive message from client and broadcast it: 
        socket.on('send-message',function(data){
            io.in(data.chatroom).emit('receive_message',data);
        })
    });
}