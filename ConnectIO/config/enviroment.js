import dotenv from 'dotenv';
//This file contains env's for development and production. 

const development ={
    name: process.env.CONNECTIO_ENVIRONMENT,
    asset_path: process.env.ASSET_PATH,
    session_cookie_key: process.env.SESSION_COOKIE_KEY,
    database_name: 'ConnectIO_development',
    smtp: {
        service: 'gmail',
        host: 'smtp.gmail.com',
        port: 587, //this is used for TLS .
        auth: {
            user: process.env.GMAIL_USERNAME ,
            pass: process.env.GMAIL_PASSWORD
        }
    },
    google_clientID: process.env.GOOGLE_CLIENTID,
    google_clientSecret: process.env.GOOGLE_CLIENT_SECRET ,
    google_callbackURL: process.env.GOOGLE_CALLBACK_URL ,
    jwt_secret_key: process.env.JWT_SECRET_KEY
    
}

const production ={
    name: process.env.CONNECTIO_ENVIRONMENT,
    asset_path: process.env.ASSET_PATH,
    session_cookie_key: process.env.SESSION_COOKIE_KEY,
    database_name: 'ConnectIO_development',
    smtp: {
        service: 'gmail',
        host: 'smtp.gmail.com',
        port: 587, //this is used for TLS .
        auth: {
            user: "sidjadhavdev@gmail.com",
            pass: "PASSWORD"
        }
    },
    google_clientID: process.env.GOOGLE_CLIENTID,
    google_clientSecret: process.env.GOOGLE_CLIENT_SECRET ,
    google_callbackURL: process.env.GOOGLE_CALLBACK_URL ,
    jwt_secret_key: process.env.JWT_SECRET_KEY

}

module.exports = eval(process.env.CONNECTIO_DEVELOPMENT) == undefined ? development: eval(process.env.CONNECTIO_ENVIRONMENT);