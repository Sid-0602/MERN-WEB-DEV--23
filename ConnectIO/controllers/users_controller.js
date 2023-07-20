module.exports.profile = function(req,res){
    return res.render('../views/user_profile.ejs',{
        title: "User-Profile"
    })
}


//render the sign up page. 
module.exports.signUp= function(req,res){
    return res.render('../views/user_sign_up.ejs',{
        title: "ConnectIO | Sign Up"
    })
}


//render signIn page. 
module.exports.signIn= function(req,res){
    return res.render('../views/user_sign_in.ejs',{
        title: "ConnectIO | Sign In"
    })
}