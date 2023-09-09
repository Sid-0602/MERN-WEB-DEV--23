
//This file contains env's for development and production. 

const development ={
    name: 'development',
    asset_path: '/assets',
    session_cookie_key: 'something',
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
    google_clientID: "154833171219-n7j77pepvdlflet11rtma7qe1v2lfkp8.apps.googleusercontent.com",
    google_clientSecret: "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",
    google_callbackURL: "http://localhost:8000/users/auth/google/callback",
    jwt_secret_key: 'EncryptionKey',
    
}

const production ={
    name: 'production'

}

module.exports = development;