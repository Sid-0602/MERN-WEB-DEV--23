const Post = require('../models/post');
const User  = require('../models/user');
//the syntax to create controller: 
//setting up a cookie: 
// module.exports.actionName = function(req,res).

module.exports.home = async function(req,res){
    // res.cookie('user_id',25); //changing value of cookie from server side.
    /*
    Post.find({},function(err,posts){
        return res.render('../views/home.ejs',{
            title: "ConnectIO | Home",
            posts: posts
        });
    }); */

    try{
        let posts = await Post.find({})
        .populate('user')
        .populate({
            path: 'comments',
            populate: {
                path: 'user'
            },
            populate: {
                path: 'likes'
            }
        }).populate('likes');

        let users = await User.find({}); 

        return res.render('home',{
            title: "ConnectIO | Home",
            posts: posts,
            all_users: users
        });
    }catch(err){
        console.log('Error',err);
        return;
    }
    
}

//async-await: 





