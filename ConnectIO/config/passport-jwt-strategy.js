const passport = require('passport');
const User = require('../models/user');

var JwtStrategy = require('passport-jwt').Strategy,
    ExtractJwt = require('passport-jwt').ExtractJwt;
    
let opts = {}
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = 'Encrypt/Decrypt Key';
passport.use(new JwtStrategy(opts, function(jwt_payload, done) {
    User.findById({id: jwt_payload._id}, function(err, user) {
        if (err) {
            console.log(err);
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




