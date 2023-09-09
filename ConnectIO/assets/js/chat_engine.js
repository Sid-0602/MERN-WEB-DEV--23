//This file is communicating from the client side.

//This class send request for connection: 
class ChatEngine{
    constructor(chatBoxId,userEmail){
        this.chatBox = $(`#${chatBoxId}`);
        this.userEmail = userEmail;

        this.socket = io.connect('http://localhost:6000');

        //if email is present, then call the event (connectionHandler)
        if(this.userEmail){
            this.connectionHandler();
        }
    }

    connectionHandler(){

        let self = this;
        this.socket.on('connect',function(){
            console.log('connection established using sockets');

            //this is request sent for joining chat-room: 
            self.socket.emit('join_room',{
                user_email: self.userEmail,
                chatroom : 'ConnectIO'
            });

            self.socket.on('user_joined',function(data){
                console.log("a user has joined!");
            })
        });

        //Sending a message (broadcasting it):
        $('#send-message').click(function(){
            let msg = $('#chat-message-input').val();

            if(msg!=''){
                self.socket.emit('send_message',{
                    message: msg,
                    user_email: self.userEmail,
                    chatroom:'ConnectIO'
                })
            }
        });

        //to detect messages received:
        self.socket.on('receive_message',function(data){
            let newMessage = $('<li>');
            let messageType = 'other-message';
            
            if(data.userEmail == self.userEmail){
                messageType = 'self-message';
            }

            newMessage.append('<span>',{
                'html':data.message
            });
            newMessage.append('<sub>',{
                'html': data.user_email
            })

            newMessage.addClass(messageType);
            $('#chat-messages-list').append(newMessage);
        })
    }
}