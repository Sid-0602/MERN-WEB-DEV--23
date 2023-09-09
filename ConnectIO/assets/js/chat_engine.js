//This file is communicating from the client side.

//This class send request for connection: 
class ChatEngine{
    constructor(chatBoxId,userEmail){
        this.chatBox = $(`#${chatBoxId}`);
        this.userEmail = userEmail;

        this.socket = io.connect('http://localhost:5000');

        //if email is present, then call the event (connectionHandler)
        if(this.userEmail){
            this.connectionHandler();
        }
    }

    connectionHandler(){
        this.socket.on('connect',function(){
            console.log('connection established using sockets');
        });
    }
}