
//the syntax to create controller: 
//setting up a cookie: 
// module.exports.actionName = function(req,res).

module.exports.home = function(req,res){
    console.log(req.cookies); //this gives us cookie. 

    // res.cookie('user_id',25); //changing value of cookie from server side.
    return res.render('../views/home.ejs',{
        title: "Home"
    });
}




