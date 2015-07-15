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

// you could call a function like this - (this doesn't do anything)

console.log(express.static("/foo"));


//this is my express middleware
// express middleware is a function that takes 3 arguments, request, response, and next
app.use(function(req, res, next){
   // if you write app.use and don't call next() -- you'll break your app 
   // middleware allows you to attach data to what's going to your templates
   // create it with app.use and using a callback function
   // but you have to use the next parameter when you set it up so you can call it
   //to create tabs to use on layout.jade
   res.locals.tabs = [
      {
          title: "Home",
          path: "/",
          activePath: "/"
      },
      {
          title: "People",
          path: "/people",
          activePath: "/people"
      },
      {
          title: "Things",
          path: "/things",
          activePath: "/things"
      }
    ];
   
   next();
   
   //the only thing you don't need to call next() on is static files
});

app.get("/", function(req,res){
    // i don't need to call next on these - i called next earlier to send
    // data down to the routes like this one
    //response to see it's working
   res.render("index", {
       title: "Home"
   });
});

app.get("/people", function(req,res){
    //response to see it's working
  res.render("people", {
      title: "People"
  });
});

app.get("/things", function(req,res){
    //response to see it's working
  res.render("things", {
      title: "Things"
  });
});

// should work with any server if it's local
// to-do: try using another cloud server
app.listen(process.env.PORT);