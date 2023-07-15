const express = require('express');
const app = express();
const port = 8000; //when deployed on live server, it is deployed on port 80.

app.listen(port,function(err){
    if(err){
        console.log(`Error in running server: ${error}`); //this is interpolation for embedding variable and string.
    }

    console.log(`Server is running on port: ${port}`);
})