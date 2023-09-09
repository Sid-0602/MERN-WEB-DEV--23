const passport= require('passport')
const googleStrategy = require('passport-google-oauth').OAuth2Strategy;
const crypto = require('crypto');

const User = require('../models/user');
const env = require('./enviroment');


//telling passport to use a new strategy for google login: 
passport.use(new googleStrategy({
        clientID: env.google_clientID,
        clientSecret:env.google_clientSecret,
        callbackURL: env.google_callbackURL,
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
