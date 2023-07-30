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

module.exports.destroy = function(req,res){
    Comment.findById(req.params.id,function(err,comment){
        console.log(comment.user.id);
        console.log(req.user.id);
        if(err){
            console.error('Error finding comment:', err);
            return res.redirect('back');
        }
        //if comment does not exist: 
        if (!comment) {
            console.log('Comment not found');
            return res.redirect('back');
        }

        //the comment.user.id need to be converted from buffer -> string .
        /*The .toString('hex') method is used to convert a 
        Buffer object to a hexadecimal (hex) string representation. */
        const commentUserId = comment.user.id.toString('hex');
        const reqUserId = req.user.id;

        if(commentUserId === reqUserId){
            let postId = comment.post;
            comment.remove(function(err){
                if(err){
                    console.log("Error in deleting a comment!!");
                    return  res.redirect('back');
                }
            });
            Post.findByIdAndUpdate(postId, { $pull: { comments: req.params.id } }, function (err, post) {
                if (err) {
                    console.error('Error updating post:', err);
                }
                console.log("Comment is deleted!!");
                return res.redirect('back');
            });
        }else {
            console.log('Comment cannot be deleted: Unauthorized');
            return res.redirect('back');
        }
    }); 
}