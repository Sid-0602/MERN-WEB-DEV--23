const nodemailer = require("../config/nodemailer");
const nodeMailer = require("../config/nodemailer");



//directly exports this module: 
exports.newComment = (comment) =>{
    console.log("Inside new Comment mailer!");

    let htmlString = nodemailer.renderTemplate({ comment:comment},'/comments/new_comment.ejs');

    nodeMailer.transporter.sendMail({
        from: "sidjadhavdev@gmail.com",
        to: comment.user.email,
        subject: "New Comment Published!",
        html: htmlString
    },(err,info)=>{
        if(err){
            console.log("Err in sending Mail!",err);
            return; 
        }

        console.log("Message Sent",info);
    });
}