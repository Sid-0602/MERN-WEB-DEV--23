const Post = require('../models/post.js');
const Comment = require('../models/comment.js');


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

module.exports.destroy = function(req,res){
    Post.findById(req.params.id, function(err,post){
        //.id means converting object id into string. _id is ObjectID. 
        if(post.user == req.user.id){
            post.remove();
            Comment.deleteMany({post: req.params.id}, function(err){
                return res.redirect('back');
            })

            console.log("Post deleted Successfully!")
        }else{
            console.log("Not Authorized: Can't delete the Post! ")
            return res.redirect('back');
        }
    })
}