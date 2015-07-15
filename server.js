var express = require("express");

//exports a method that gives a new express application
var app = express();
app.locals.pretty = true;
app.set("view engine", "jade");

//set up middleware for static route - you're mounting this /public folder
// to hold static files

// if you request a file from a server, it will look to see if the file is in 
// static files first

//static files are meant to be public --- you can access them right from the url

//in node, dirname is the root of our application
app.use(express.static(__dirname +"/public"));

app.get("/", function(req,res){
    //response to see it's working
   res.render("index", {
       title: "Home"
   });
});

// app.get("/people", function(req,res){
//     //response to see it's working
//   res.render("people", {
//       title: "People"
//   });
// });

// app.get("/things", function(req,res){
//     //response to see it's working
//   res.render("things", {
//       title: "Things"
//   });
// });

// should work with any server if it's local
//to-do: try using another cloud server
app.listen(process.env.PORT);