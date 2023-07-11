const express = require('express');
const port='8000';
const fs = require('fs');
const path = require('path');


//including the database library: 
const db = require('./config/mongoose')
const Contact = require('./models/contact');
const { rejects } = require('assert');


const app = express(); 

//setting up template engine as EJS.
app.set('view engine','ejs'); 
//setting up the view path. This joins the controller and view.
app.set('views',path.join(__dirname,'views'));

//parser 
app.use(express.urlencoded());

/* 
writing our own middleware: MiddleWare 1

app.use(function(req,res,next){
    console.log('middleware 1 called!!');
    next();
})

MiddleWare 2:

app.use(function(req,res,next){
    console.log('middleware 2 called!!');
    next();
})

*/

//Model part from MVC: Creating database schema. 

app.use(express.static('assets'));

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

//These is controllers: 
app.get('/',function(req,res){
    //console.log(req); //this displays request data that is requested by browser.

    return res.render('home',{
        title: "Contacts-List",
        contact_list : contactList
    });
});


//Create a contact by taking form data: 

app.post('/create-contact', (req, res) => {
    //This is a callback function. NodeJS stopped usage of callbacks. 

    Contact.create({
        name:req.body.name,
        phone: req.body.phone
    },function(err,newContact){
        if(err){
            console.log('Error in creating a contact!!');
            return;
        }

        console.log('*************',newContact);
        return res.redirect('back');

    });
});

//for deleting a contact, get query from url. 
app.get('/delete-contact/',function(req,res){
    //query and string params. 
    console.log(req.query);
    let phone = req.query.phone;
    let contactIndex = contactList.findIndex(contact => contact.phone == phone);

    if(contactIndex!=-1){
        contactList.splice(contactIndex,1);
    }

    return res.redirect('back');
});

app.listen(port,function(err){
    if(err){
        console.log("Error!!",err);
    }
    console.log("Express Server is running on Port: ",port);
});