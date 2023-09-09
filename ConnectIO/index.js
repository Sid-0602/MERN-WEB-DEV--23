//basic server code and for user-cookies:
const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
const port = 8000; //when deployed on live server, it is deployed on port 80.
const expressLayouts = require('express-ejs-layouts');
const db = require('./config/mongoose');
const env = require('./config/enviroment');
const path = require('path');

//used for session cookie and auth:
const session = require('express-session');
const passport = require('passport');
const passportLocal = require('./config/passport-local-strategy.js');
const MongoStore  = require('connect-mongo')(session);

//google-Oauth:
const passportGoogle = require('./config/passport-google-oauth2-strategy')

//passport-jwt:
const passportJWT = require('./config/passport-jwt-strategy.js');

//socket.io for chat application: /* This is setup of chat-server*/ 
const chatServer = require('http').Server(app);
const chatSockets = require('./config/chat_sockets').chatSockets(chatServer);
chatServer.listen(6000); //chatServer listens on port 6000.

//sass middleware (this is DART MIDDLEWARE)
const sassMiddleware = require('sass-middleware');
const path = require('path');
const flash = require('connect-flash');
const customMare = require('./config/middleware');
const multer = require('multer');



app.use(express.urlencoded());
app.use(cookieParser());


//connect static files for css/js
app.use(express.static(__dirname + env.asset_path));

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
    secret: env.session_cookie_key,
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