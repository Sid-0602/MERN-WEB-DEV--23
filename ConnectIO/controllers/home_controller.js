
//the syntax to create controller: 

// module.exports.actionName = function(req,res).

module.exports.home = function(req,res){
    return res.render('../views/home.ejs',{
        title: "Home"
    });
}


