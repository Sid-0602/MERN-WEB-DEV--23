const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
const port = 8000; //when deployed on live server, it is deployed on port 80.
const expressLayouts = require('express-ejs-layouts');
const db = require('./config/mongoose');

//used for session cookie and auth
const session = require('express-session');
const passport = require('passport');
const passportLocal = require('./config/passport-local-strategy.js');
const MongoStore  = require('connect-mongo')(session);

//sass middleware (this is DART MIDDLEWARE)
const sassMiddleware = require('sass-middleware');
const path = require('path');
const flash = require('connect-flash');
const customMare = require('./config/middleware');
const multer = require('multer');
app.use(sassMiddleware({
    src: path.join('./assets/scss','assets','scss'),
    dest: path.join('./assets/scss','assets','scss'),
    debug: false,
    outputStyle: 'expanded',
    prefix: './css',
}));



app.use(express.urlencoded());
app.use(cookieParser());


//connect static files for css/js
app.use(express.static(__dirname + '/assets'));

//making the upload path available for user.
app.use('/uploads',express.static(__dirname + '/uploads'));

app.use(expressLayouts); //using layouts. 
//extract styles and scripts from the layout. 
app.set('layout extractStyles',true);
app.set("layout extractScripts", true)




//set up the view engine.
app.set('view engine','ejs');
app.set('views','./views'); //add the views path. 

//mongo store is used to store the session cookie in the db. 
app.use(session({
    name: 'user_id',
    secret: 'something',
    saveUninitialized: false,
    resave: false,
    cookie: {
        maxAge: (1000 * 60 * 100)
    },
    store: new MongoStore(
        {
            mongooseConnection: db,
            autoRemove: 'disabled'
        },
        function(err){
            console.log( err || 'connect-mongodb setup ok..');
        }
    )
}));

app.use(passport.initialize());
app.use(passport.session());

app.use(passport.setAuthenticatedUser);
app.use(flash()); //set this flash messages just after a session is set. 
app.use(customMare.setFlash);
//use express router: 

app.use('/',require('./routes'));



app.listen(port,function(err){
    if(err){
        console.log(`Error in running server: ${error}`); //this is interpolation for embedding variable and string.
    }

    console.log(`Server is running on port: ${port}`);
})