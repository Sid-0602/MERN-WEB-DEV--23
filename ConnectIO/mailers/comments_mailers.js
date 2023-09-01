const nodeMailer = require("../config/nodemailer");



//directly exports this module: 
exports.newComment = (comment) =>{
    console.log("Inside new Comment mailer!");

    nodeMailer.transporter.sendMail({
        from: "sidjadhavdev@gmail.com",
        to: comment.user.email,
        subject: "New Comment Published!",
        html: '<h1>Your comment is now Published!</h1>'
    },(err,info)=>{
        if(err){
            console.log("Err in sending Mail!",err);
            return; 
        }

        console.log("Message Sent",info);
    });
}