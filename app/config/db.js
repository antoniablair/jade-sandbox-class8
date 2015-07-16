var Q = require("q");
var mongoose = require("mongoose");

module.exports = {
    connect: connect
};

function connect(){
    // was I able to connect to db? Then my promise is resolved
    var dfd = Q.defer();
    mongoose.connect("mongodb://localhost:27017/my_world/");
    mongoose.connection.on("open", function(){
        dfd.resolve();
    });
    mongoose.connection.on("error", function(err){
        dfd.reject(err);
    });
    return dfd.promise;
}