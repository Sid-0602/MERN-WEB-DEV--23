const mongoose = require('mongoose');
const path = require('path');
const likeSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.ObjectId
    },

    //this defines object Id of liked Object: 
    likeable: {
        type: mongoose.Schema.ObjectId,
        require: true,
        refPath: 'onModel'
    },
    
    //this field is used for defining the type of liked object since this is dynamic reference. 
    onModel : {
        type: String,
        require : true,
        enum : ['Post','Comment']
    },
},{timestamps:true});

const Like  = mongoose.Model('Like',likeSchema);
module.exports = Like;