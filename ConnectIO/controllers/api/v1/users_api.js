const User = require('../../../models/user');
const jwt = require('jsonwebtoken');
const env = require('../../../config/enviroment');


module.exports.createSession = async function(req,res){

    let user = await User.findOne({email: req.body.email});
        try{

            //if user is not found or incorrect credentials 
            if(!user){
                return res.json(404,{
                    message: "User not found!"
                });
            }

            if(user.password!=req.body.password){
                return res.json(404,{
                    message: "Invalid Credentials!"
                });
            }

            return res.json(200,{
                message: "Sign-in Successful! Token is generated!",
                data:{
                    token: jwt.sign(user.toJSON(), env.jwt_secret_key, {expiresIn:'100000'})
                }
            }); 
        }catch(err){
            console.log("Error in creating Session using JWT");
            return  res.json(500,{
                message: "Internal Server Error"
            });
        }

}