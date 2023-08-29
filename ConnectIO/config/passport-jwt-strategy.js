const passport = require('passport');
const User = require('../models/user');

const JWTStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
    
let opts = {}
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = 'EncryptionKey';
passport.use(new JWTStrategy(opts, function(jwtPayLoad, done) {
    User.findById(jwtPayLoad._id, function(err, user) {
        if (err) {
            console.log("Error in finding user from JWT",err);
            return done(err, false);
        }
        if (user) {
            return done(null, user);
        } else {
            return done(null, false);
        }
    });
}));

module.exports = passport;




