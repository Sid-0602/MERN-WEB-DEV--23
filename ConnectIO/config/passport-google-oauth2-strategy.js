const passport= require('passport')
const googleStrategy = require('passport-google-oauth').OAuth2Strategy;
const crypto = require('crypto');

const User = require('../models/user');


//telling passport to use a new strategy for google login: 
passport.use(new googleStrategy({
        clientID: "154833171219-n7j77pepvdlflet11rtma7qe1v2lfkp8.apps.googleusercontent.com",
        clientSecret: "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",
        callbackURL: "http://localhost:8000/users/auth/google/callback",
    },

    function(accessToken,refreshToken,profile,done){
        //find a user: 
        User.findOne({email: profile.emails[0].value}).exec(function(err,user){
            if(err){console.log("Error in Google-Strategy Passport!",err); return;}

            console.log(profile);
            console.log("************************");
            console.log("Access token is: ",accessToken);//this is access token for the user.
            

            if(user){
                //if found, set this user as req.user
                return done(null,user);
            }else{
                //if user does not exist: create user using help of gmail account. 

                User.create({
                    name: profile.displayName,
                    email: profile.emails[0].value,
                    password: crypto.randomBytes(20).toString('hex')
                }), function(err,user){
                    if(err){console.log("Error in Creating User!",err); return;}
                    
                    return done(null,user);
                }
            }
        });
    }
));


module.exports = passport;