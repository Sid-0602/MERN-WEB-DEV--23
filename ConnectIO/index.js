const express = require('express');
const app = express();
const port = 8000; //when deployed on live server, it is deployed on port 80.
const expressLayouts = require('express-ejs-layouts');


app.use(expressLayouts); //using layouts. 
//use express router: 

app.use('/',require('./routes'));

//set up the view engine.
app.set('view engine','ejs');
app.set('views','./views'); //add the views path. 

app.get("/", (req, res) => {
    res.send("Hello World!");
});


app.listen(port,function(err){
    if(err){
        console.log(`Error in running server: ${error}`); //this is interpolation for embedding variable and string.
    }

    console.log(`Server is running on port: ${port}`);
})