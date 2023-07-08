const express = require('express');
const port='8000';
const fs = require('fs');
const path = require('path');

const app = express(); 

//setting up template engine as EJS.
app.set('view engine','ejs'); 
//setting up the view path.
app.set('views',path.join(__dirname,'views'));

//parser
app.use(express.urlencoded());

var contactList = [
    {
        my_name:"Siddhant J",
        my_phone:"8010099787"
    },
    {
        my_name:"Siddharth S",
        my_phone: "9333928772"
    },
    {
        my_name: "Vaishnavi D",
        my_phone: "8669973534"
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