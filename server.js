var express = require("express");

//exports a method that gives a new express application
var app = express();
app.locals.pretty = true;
app.set("view engine", "jade");

app.get("/", function(req,res){
    //response to see it's working
   res.render("index");
});

// should work with any server if it's local
//to-do: try using another cloud server
app.listen(process.env.PORT);