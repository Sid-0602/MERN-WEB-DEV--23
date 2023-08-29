const user = require('../../../models/user');
const jwt = require('jsonwebtoken');


module.exports.createSession = async function(req,res){

    let user = User.findOne({email: req.body.email});
        try{

            //if user is not found or incorrect credentials 
            if(!user || user.password!=req.body.password){
                return res.json(422,{
                    message: "Invalid username/password!"
                });
            }

            return res.json(200,{
                message: "Sign-in Successful! Token is generated!",
                data:{
                    token: jwt.sign(user.toJSON(), "Encrypt/Decrypt Key", {expiresIn:'100000'})
                }
            }); 
        }catch(err){
            console.log("Error in creating Session using JWT");
            return  res.json(500,{
                message: "Internal Server Error"
            });
        }

}