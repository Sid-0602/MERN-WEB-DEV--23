const express = require('express');
const port='8000';
const fs = require('fs');
const path = require('path');

const app = express(); 

//setting up template engine as EJS.
app.set('view engine','ejs'); 
//setting up the view path.
app.set('views',path.join(__dirname,'views'));

var contactList = [
    {
        name:"Siddhant J",
        phone:"8010099787"
    },
    {
        name:"Siddharth S",
        phone: "9333928772"
    },
    {
        name: "Vaishnavi D",
        phone: "8669973534"
    }
]



//return a response for request: 

//These are controllers: 
app.get('/',function(req,res){
    //console.log(req); //this displays request data that is requested by browser.

    return res.render('home',{
        title: "Contacts-List",
        contact_list : contactList
    
    });
});

app.get('/practise',function(req,res){
    //console.log(req); //this displays request data that is requested by browser.

    return res.render('practise',{
        title: "Practice Page"
    });
});

//Create a contact: 

app.post("/create-contact", (req, res) => {
    // return res.redirect('/practise');
});

app.listen(port,function(err){
    if(err){
        console.log("Error!!",err);
    }
    console.log("Express Server is running on Port: ",port);
})