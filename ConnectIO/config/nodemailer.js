//This is used to config nodemailer files that will send the emails with templates using SMTP protocol.

const nodemailer = require("nodemailer");
const ejs = require("ejs");
const path = require("path");
const env = require('./enviroment');

//create a transport to send the email. 
let transporter = nodemailer.createTransport(env.smtp);

//this is used to create and send a ejs template into the Email. 
let renderTemplate = (data,relativePath) =>{

    let mailHTML; 
    ejs.renderFile(
        path.join(__dirname,'../views/mailers',relativePath),
        data,
        function(err,template){
            if(err){console.log("Error in rendering the template!!"); return;}
            mailHTML = template;
        }

        
    )

    return mailHTML;
}

//module is exported. 
module.exports = {
    transporter : transporter,
    renderTemplate : renderTemplate
}
