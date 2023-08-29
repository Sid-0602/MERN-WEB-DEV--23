// this api will return Posts JSON format for an user.


//index used to list down action names.


const Post = require('../../../models/post');
const User  = require('../../../models/user');
const Comment = require('../../../models/comment');

module.exports.index = async function(req,res){
    try{
        let posts = await Post.find({})
        .populate('user')
        .populate({
            path: 'comments',   
            populate: {
                path: 'user'
            }
        });
        
        return  res.json(200,{
            message: "List of posts",
            posts: posts
        });
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

            return  res.json(200,{message:"Post deleted successfully!"});;
        }else{
            return  res.json(401,{message:"UnAuthorized Access!!"});;
        }
        
        
    }catch(err){

        console.log("Error : ",err);
        return    res.json(500,{
            message: "Internal Server Error!"
        });
    }
}