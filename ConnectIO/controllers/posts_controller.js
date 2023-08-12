const Post = require('../models/post.js');
const Comment = require('../models/comment.js');


module.exports.create = async function(req,res){
    try{

        let post = await Post.create({
            content: req.body.content,
            user: req.user._id
        });
        

        if(req.xhr){
            return  res.status(200).json({
                data: {
                    post: post
                },
                message: "Post created!!"
            });
        };
        console.log("Posted Successfully!!");
        return res.redirect('back');
    }catch(err){
        console.log('Error',err);
        return;
    }
}

module.exports.destroy = async function(req,res){
    try{
        let post = await Post.findById(req.params.id);
        //.id means converting object id into string. _id is ObjectID. 
        if(post.user == req.user.id){
            post.remove();
            await Comment.deleteMany({post: req.params.id});
            console.log("Post deleted Successfully!")
            return res.redirect('back');
        }
    }catch(err){
        console.log("Error",err);
        return res.redirect('back'); 
    }
}