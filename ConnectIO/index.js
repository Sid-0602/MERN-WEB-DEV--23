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



app.use(express.urlencoded());
app.use(cookieParser());

app.use(express.static('/assets'));

app.use(expressLayouts); //using layouts. 
//extract styles and scripts from the layout. 
app.set('layout extractStyles',true);
app.set("layout extractScripts", true)




//set up the view engine.
app.set('view engine','ejs');
app.set('views','./views'); //add the views path. 

app.use(session({
    name: 'ConnectIO',
    secret: 'something',
    saveUninitialized: false,
    resave: false,
    cookie: {
        maxAge: (1000 * 60 * 100)
    }
}));

app.use(passport.initialize());
app.use(passport.session())

//use express router: 

app.use('/',require('./routes'));



app.listen(port,function(err){
    if(err){
        console.log(`Error in running server: ${error}`); //this is interpolation for embedding variable and string.
    }

    console.log(`Server is running on port: ${port}`);
})