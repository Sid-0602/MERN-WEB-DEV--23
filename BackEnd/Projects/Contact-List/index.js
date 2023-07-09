const express = require('express');
const port='8000';
const fs = require('fs');
const path = require('path');

const app = express(); 

//setting up template engine as EJS.
app.set('view engine','ejs'); 
//setting up the view path. This joins the controller and view.
app.set('views',path.join(__dirname,'views'));

//parser 
app.use(express.urlencoded());

/* 
//writing our own middleware: MiddleWare 1
app.use(function(req,res,next){
    console.log('middleware 1 called!!');
    next();
})

//MiddleWare 2:
app.use(function(req,res,next){
    console.log('middleware 2 called!!');
    next();
})

*/

app.use(express.static('assets'));

var contactList = [
    {
        my_name:"Siddhant J",
        my_cc: "+91",
        my_phone:"8010099787"
    },
    {
        my_name:"Siddharth S",
        my_cc: "+91",
        my_phone: "9333928772"
        
    },
    {
        my_name: "Vaishnavi D",
        my_cc: "+91",
        my_phone: "8669973534"
       
    }
]



//return a response for request: 

//These is controllers: 
app.get('/',function(req,res){
    //console.log(req); //this displays request data that is requested by browser.

    return res.render('home',{
        title: "Contacts-List",
        contact_list : contactList
    });
});


//Create a contact by taking form data: 

app.post("/create-contact", (req, res) => {
   /* contactList.push({
        name: req.body.my_name,
        phone: req.body.my_phone
    }); */
    console.log(req.body);
    contactList.push(req.body);
    
    return res.redirect('/');
});

app.listen(port,function(err){
    if(err){
        console.log("Error!!",err);
    }
    console.log("Express Server is running on Port: ",port);
})