
//the syntax to create controller: 

// module.exports.actionName = function(req,res).

module.exports.home = function(req,res){
    return res.end('<h1>Express is up for ConnectIO! This is Home controller</h1>');
}


