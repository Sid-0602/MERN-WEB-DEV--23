const Likes = require("../models/like");
const Post = require("../models/post");
const Comment = require("../models/comment");

module.exports.toggleLike = async function(req,res){
    try{
        let likeable;
        let deleted = false;

        if(req.query.type == 'Post'){
            likeable = await Post.findById(req.query.id).populate('likes');
        }else{
            likeable = await Comment.findById(req.query.id).populate('likes');
        }
        //check if like already exists: 

        let existingLink = await Like.findOne({
            likeable: req.query.id,
            onModel: req.query.type,
            user: req.user._id
        })

        //if like already exists, then delete it:
        if(existingLink){
            likeable.likes.pull(existingLink._id);
            likeable.save();

            existingLink.remove();
            deleted = true;
        }else{
            //else make a new like: 
            let newLike = await Like.create({
                user: req.user._id,
                likeable: req.query.id,
                onModel: req.query.type
            });

            likeable.likes.push(like._id);
        }


        return res.json(200,{
            message: "Request Successful!",
            data: {
                deleted: deleted
            }
        })
    }catch(err){
        console.log(err);
        return  res.json(500,{
            message: "Internal Server error!"
        });
    }
}
