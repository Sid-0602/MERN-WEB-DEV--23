
const Post = require('../models/post');
//the syntax to create controller: 
//setting up a cookie: 
// module.exports.actionName = function(req,res).

module.exports.home = function(req,res){
    console.log(req.cookies); //this gives us cookie. 

    // res.cookie('user_id',25); //changing value of cookie from server side.
    /*
    Post.find({},function(err,posts){
        return res.render('../views/home.ejs',{
            title: "ConnectIO | Home",
            posts: posts
        });
    }); */

    // We are using this query to populate the "user". exec() is callback function. Read more on documentation.
    Post.find({})
    .populate('user')
    .populate({
        path: 'comments',
        populate: {
            path: 'user'
        }
    })
    .exec(function(err,posts){
        return res.render('../views/home.ejs',{
            title: "ConnectIO | Home",
            posts: posts
        });
    })
    
}






