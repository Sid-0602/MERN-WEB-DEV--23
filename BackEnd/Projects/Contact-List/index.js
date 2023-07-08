const express = require('express');
const port='8000';

const app = express(); 


//return a response for request: 
app.get('/',function(req,res){
    res.send("<h1>Response received!!</h1>");
});

app.listen(port,function(err){
    if(err){
        console.log("Error!!",err);
    }
    console.log("Express Server is running on Port: ",port);
})