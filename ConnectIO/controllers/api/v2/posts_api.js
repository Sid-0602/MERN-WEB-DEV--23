

const Post = require('../../../models/post');
const User  = require('../../../models/user');

module.exports.index = async function(req,res){
    try{
        let posts = await Post.find({})
        .sort('-createdAt')
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