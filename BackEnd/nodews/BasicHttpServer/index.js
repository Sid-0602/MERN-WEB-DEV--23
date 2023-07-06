const http = require('http');
const port = 8000;


//request handler: 

function requestHandler(req,res){
    console.log(req.url);
    res.writeHead(200,{'content-type':'text/html'});
    res.end("<h1>Gotcha!!</h1>");
}

//creating server and running it using server.listen.
const server = http.createServer(requestHandler); //this event creates server.

server.listen(port,function(err){
    if(err){
        console.log(err);
    }
    
    console.log("Server is Up and Running on Port 8000!!");
});