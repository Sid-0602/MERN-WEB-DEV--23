// this api will return Posts JSON format for an user.


//index used to list down action names.
module.exports.index = function(req,res){
    return  res.json(200,
        {
        message: "List of Posts - POSTAPI",
        posts: []
    });
}