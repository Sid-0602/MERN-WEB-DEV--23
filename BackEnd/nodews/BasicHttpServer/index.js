const http = require('http');
const port = 8000;


const server = http.createServer(); //this event creates server.

server.listen(port,function(err){
    if(err){
        console.log(err);
    }
    
    console.log("Server is Up and Running on Port 8000!!");
});