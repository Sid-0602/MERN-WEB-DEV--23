const Comment = require('../models/comment');
const Post = require('../models/post');
const nodeMailer = require('../config/nodemailer');
const commentsMailer = require('../mailers/comments_mailers');
const queue = require('../config/kue');
const commentEmailWorker = require('../workers/comment_email_worker');


module.exports.create = async function(req,res){
    //find if the post exists in database: 

    try {
        let post = await Post.findById(req.body.post);

        if(post){
            let comment = await Comment.create({
                content: req.body.content,
                user: req.user._id,
                post: req.body.post
            });
            console.log('Comment posted successfully!');
            post.comments.push(comment);
            await post.save();   

            //populate the comments: 
            comment = await comment.populate('user','name email')
            //await commentsMailer.newComment(comment);

            //this section is for kue jobs: 
            let job = queue.create('emails',comment).save(function(err){
                if(err){
                    console.log("Error in creating a queue!");
                }

                console.log("Job Enqueued!",job.id);
            })
            return  res.redirect('back');
        }
    } catch (err) {
        console.log("Error",err);
        return  res.redirect('/');
    }
    
}

module.exports.destroy = async function(req,res){

    try {
        let comment = await Comment.findById(req.params.id);
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
    } catch (err) {
        console.log("Error",err);
        return res.redirect('/');
    }
}