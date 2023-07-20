const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/ConnectIO_development');

const db  = mongoose.connection;
db.on('error',console.error.bind(console,"Error Connecting to MongoDB!!"));

db.once('open',function(){
    console.log('Connected to Database :: MongoDB ');
})

module.exports = db;