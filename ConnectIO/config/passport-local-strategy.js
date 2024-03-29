const passport  =  require("passport");

const LocalStrategy = require("passport-local").Strategy;
const User  = require('../models/user');

//authentication using passport: 
passport.use(new LocalStrategy({
        usernameField: 'email'
    },


    //here done is a callback function. 
    function(email,password,done){
        //find user and establish identity: 
        User.findOne({email:email}, function(err,user){
            if(err){
                console.log("Error in finding user --> Passport");
                return done(err);  
            }
            
            //if user does not exist or password incorrect: 
            if(!user || user.password!= password){
                console.log("Invalid Credentials!!");
                return done(err,false); //done takes 2 arguments.
            }

            return done(null,user); //if user is found then return done().
        });
    }


));

//serializing user to decide which key is to be kept in the cookies

passport.serializeUser(function(user,done){
    done(null,user.id); //this encrypts the id. 
});

//deserializing user from thr key in the cookies

passport.deserializeUser(function(id,done){
    User.findById(id, function(err,user){
        if(err){
            console.log("Error in finding user --> Passport");
            return done(err);  
        }
        
        return done(null,user);
    })
});

//check if user is authenticated: 
passport.checkAuthentication = function(req,res,next){
    if(req.isAuthenticated()){
        return next(); //if user is signed-in pass user to next page. 
    }else{
         //if user is not signed in: 
        return  res.redirect('/users/sign-in');
    }

   
}

passport.setAuthenticatedUser = function(req,res,next){
    if(req.isAuthenticated()){
        /*req.user contains the current signed in user form the session 
        cookie and we are just sending this to the locals for the views.
        */
        res.locals.user = req.user;
    } 

    next();
}

module.exports = passport;