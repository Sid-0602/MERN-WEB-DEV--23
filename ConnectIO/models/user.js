const mongoose = require('mongoose');
const multer = require('multer');
const path = require('path');
const AVATAR_PATH = path.join('/uploads/users/avatars');

const userSchema = new mongoose.Schema({
    email:{
        type: String,
        required: true,
        unique: true
    },

    password:{
        type: String,
        required: true
    },

    name:{
        type:String,
        required: true
    },
    
    avatar:{
        type:String
    }
},
{timestamps: true});

//defining storage for multer to handle the uploaded file: 
//cb => callback function. 
let storage  =  multer.diskStorage({
    destination: function(req,file,cb){
        cb(null, path.join(__dirname, '..', AVATAR_PATH)); 
    },
    filename: function(req,file,cb){
        cb(null,file.fieldname + '-' + Date.now()); //fieldname is AVATAR here. 
    }
});

//static functions/method: 
/*
A static method (or static function) is a method defined as a member of an object but is accessible 
directly from an API object's constructor, rather than from an object instance 
created via the constructor.
*/
userSchema.statics.uploadedAvatar = multer({storage: storage}).single('avatar'); //this only allows single file to be uploaded. 
userSchema.statics.avatarPath = AVATAR_PATH;


const User = mongoose.model('User',userSchema);
module.exports = User;