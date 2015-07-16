var mongoose = require("mongoose");

var thingSchema = mongoose.Schema({
   name: String 
});

//the model determines what collection (table) it looks in in the database
// if it doesn't exist, it will create it
var Thing = mongoose.model("thing", thingSchema);

module.exports = Thing;