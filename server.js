var express = require("express");

//exports a method that gives a new express application
var app = express();
app.locals.pretty = true;
app.set("view engine", "jade");

//set up middleware for static route - you're mounting this /public folder
// to hold static files

//in node, dirname is the root of our application
app.use(express.static(__dirname +"/public"));

app.get("/", function(req,res){
    //response to see it's working
   res.render("index");
});

// should work with any server if it's local
//to-do: try using another cloud server
app.listen(process.env.PORT);