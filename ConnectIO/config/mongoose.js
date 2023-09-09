const mongoose = require('mongoose');
const env = require('./enviroment');

mongoose.connect(`mongodb://127.0.0.1:27017/${env.database_name}`);

const db  = mongoose.connection;
db.on('error',console.error.bind(console,"Error Connecting to MongoDB!!"));

db.once('open',function(){
    console.log('Connected to Database :: MongoDB ');
})

module.exports = db;