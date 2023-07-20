module.exports.profile = function(req,res){
    return res.render('../views/user_profile.ejs',{
        title: "User-Profile"
    })
}