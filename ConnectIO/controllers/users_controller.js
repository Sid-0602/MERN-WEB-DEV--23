const User = require('../models/user.js')

module.exports.profile = function(req,res){

    User.findById(req.params.id, function(err,user){
        //no need to check for session cookie, as ,it will be authenticated by passport JS.
            return res.render('user_profile',{
            title: 'User Profile',
            profile_user: user
        });
    });
    

}

//render the sign up page. 
module.exports.signUp= function(req,res){
    if(req.isAuthenticated()){
        return res.redirect('/users/profile');
    }
    
    return res.render('../views/user_sign_up.ejs',{
        title: "ConnectIO | Sign Up"
    })
}


//render signIn page. 
module.exports.signIn= function(req,res){

    if(req.isAuthenticated()){
        return res.redirect('/users/profile');
    }
    return res.render('../views/user_sign_in.ejs',{
        title: "ConnectIO | Sign In"
    })
}

//get the signup data: 
module.exports.create = function(req,res){

    //if the password and confirm password does not match.
    if(req.body.password != req.body.confirm_password){
        
        return res.redirect('back');
    }
    
    //check for user with the email in the database: 
    User.findOne({email: req.body.email},function(err,user){
        //if user is not found, then show the error. 
        if(err){
            console.log("Error in finding user!!");
        }

        if(!user){
            User.create(req.body, function(err,user){
                if(err){
                    console.log("Error in creating user while signing up!!");
                    return;
                }
                return res.redirect('/users/sign-in');
            })
        }else{
            return res.redirect('back');
        }
    });
}
//get the sign-in data and create a session for user. 

module.exports.createSession = function(req,res){

    //redirect to home page as session is created in passport Js itself.
    return res.redirect('/users/profile');

}

module.exports.terminateSession = function(req,res){
    //req.logout requires to be a callback function .
    req.logout(function(err) {
        if (err) { return next(err); }
        res.redirect('/');
    });
}