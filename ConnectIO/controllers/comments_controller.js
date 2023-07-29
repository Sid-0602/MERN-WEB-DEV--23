const Comment = require('../models/comment');
const Post = require('../models/post');

module.exports.create = function(req,res){
    //find if the post exists in database: 

    Post.findById(req.body.post,function(err,post){

        if(err){
            console.log("Error finding the post!!",err);
            return res.redirect('/');
        }

        if(!post){
            console.log("Post does not exist!");
            return res.redirect('/');
        }

        if(post){
            Comment.create({
                content: req.body.content,
                user: req.user._id,
                post: req.body.post
            }, function(err,comment){
                if (err) {
                    console.error('Error creating the comment:', err);
                    return res.redirect('/');
                }
    
                console.log('Comment posted successfully!');
                post.comments.push(comment);
                post.save();

                res.redirect('/');
            })
        }
    });
}