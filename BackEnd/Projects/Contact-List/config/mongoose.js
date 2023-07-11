
//first step is to acquire the library: 
const mongoose = require('mongoose');


//connecting to the database. 
mongoose.connect('mongodb://127.0.0.1:27017/Contact_listDB');

//acquire connection (to check if it is successful).
const db = mongoose.connection; //the database connected will appear here. 


//error message
db.on('error',console.error.bind(console,'error connecting to db'));

//up and running then print following message: 
db.once('open',function(){
    console.log("Successfully connected to DB!!");
});