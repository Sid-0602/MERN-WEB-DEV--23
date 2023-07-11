//using library: 
const mongoose = require('mongoose');

//defining the collection and documents: 
const contactSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    phone:{
        type:String,
        required: true
    }
});

//here Contact will be exported to index.js file and in database, the name='Contact' is the database name of our collection.
const Contact = mongoose.model('Contact',contactSchema);

module.exports = Contact;