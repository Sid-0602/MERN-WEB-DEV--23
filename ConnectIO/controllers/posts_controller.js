const Post = require('../models/post.js');


module.exports.create = function(req,res){
    Post.create({
        content: req.body.content,
        user: req.user._id
    },function(err,post){
        if(err){
            console.log("Error in creating the post!!");
        }

        console.log("Posted Successfully!!");
        return res.redirect('back');
    })
}