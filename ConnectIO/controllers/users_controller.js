const User = require('../models/user.js')

module.exports.profile = function(req,res){

    //check if user id is present in cookies:
    if(req.cookies.user_id){
        User.findById(req.cookies.user_id, function(err,user){
            if(user){
                    return res.render('user_profile',{
                    title: "User Profile",
                    user: user
                })
            }else{
                return res.redirect('/users/sign-in');
            }
        });
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

    //find user
    User.findOne({ email: req.body.email}, function(err,user){
        if(err){
            console.log("Some error occurred! Specific: ",err);
        }
        
        if(user){
            //handle the user found
            //if the password does not match
            if(user.password!=req.body.password){
                return  res.redirect('back');
            }
            //create session for user: 

            //to create a session, set the cookie with user_id.
            res.cookie('user_id',user.id);
            return res.redirect('/users/profile');

        }else{
            //handle if user not found
            return res.redirect('back');
        }
    }); 

}


module.exports.signOut = function(req,res){
    
    const sessionCookie = req.cookies.session;

    if(sessionCookie){

        //delete the cookie and send the response status as 200: 
        res.clearCookie('session');  //this clears the session cookie. 
        console.log("Logged out successully!");
        res.redirect('/users/sign-in'); 
    }
    else{
        return res.redirect('/users/sign-in');
    }
    
    
}