const express = require('express');
const port='8000';
const fs = require('fs');
const path = require('path');

const app = express(); 

//setting up template engine as EJS.
app.set('view engine','ejs'); 
//setting up the views. 
app.set('views',path.join(__dirname,'views'));


//return a response for request: 
app.get('/',function(req,res){
    //console.log(req); //this displays request data that is requested by browser.

    return res.render('home');
});

app.listen(port,function(err){
    if(err){
        console.log("Error!!",err);
    }
    console.log("Express Server is running on Port: ",port);
})