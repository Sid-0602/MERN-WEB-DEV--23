//Load HTTP module
const http = require('http');
const port = 8000;
const fs = require('fs'); //this is a module used to read and write from files.

//request handler: 

function requestHandler(req,res){
    console.log(req.url);
    res.writeHead(200,{'content-type':'text/html'});
    
    //fileSystem == fs. 
    /*
    fs.readFile('./index.html',function(err,data){
        if(err){
            console.log("error",err);
            return res.end('<h1>ERROR!!</h1>')
        }

        return res.end(data);

    });

    */

    //Code to integrate web pages: 

    let filePath;  //intialise a filePath. 
    switch(req.url){
        case '/':
            filePath = './index.html'
            break;
        case '/profile':
            filePath = './profile.html'
            break
        default:
            filePath = './404.html'
    }

    //reading the file data and sending it back to browser as a req. 
    fs.readFile(filePath,function(err,data){
        if(err){
            console.log('error');
            return res.end('<h1>ERROR!!</h1>');
        }

        return res.end(data);
    })
}

//creating server and running it using server.listen.
const server = http.createServer(requestHandler); //this event creates server.

server.listen(port,function(err){
    if(err){
        console.log(err);
    }
    
    console.log("Server is Up and Running on Port ",port);
});