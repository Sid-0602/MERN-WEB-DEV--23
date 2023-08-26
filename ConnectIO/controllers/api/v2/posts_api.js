module.exports.index = function(req,res){
    return  res.json(200,{
        message: "Post API --VERSION 2",
        posts: []
    });
}