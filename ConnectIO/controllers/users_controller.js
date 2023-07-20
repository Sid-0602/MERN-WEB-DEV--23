const User = require('../models/user.js');

module.exports.profile = function(req,res){

    //check if user id is present in cookies:
    if(req.cookies.user_id){
        User.findById(req.cookies.user_id, function(err,user){
            if(user){
                return res.render('user_profile',{
                    title: "User Profile",
                    user: user
                })
            }

            return res.redirect('/users/sign-in');
        })
    }else{
        return res.redirect('/users/sign-in');
    }

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

//get the signup data: 
module.exports.create = function(req,res){
    module.exports.create = function(req,res){
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
}

//get the sign in data and create a session for user. 

//This is local auth method in manual-local-auth: 
module.exports.createSession = function(req,res){
    //steps for auth: 
    //find the user: 
    User.findOne({email: req.body.email},function(err,user){
        if(err){
            console.log("Error in finding user in signing in!");
        }
        //handle user found: 
        if(user){

            //handle password which don't match: 
            if(user.password!=req.body.password){
                return res.redirect('back');
            }

            // handle session creation: 
            res.cookie('user_id',user.id);
            return res.redirect('/users/profile');
            
        }
        else{
            //handle user not found : 
            return res.redirect('back');
        }
    })

    

}