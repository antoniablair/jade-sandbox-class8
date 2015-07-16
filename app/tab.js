//constructor function
function Tab(title, path) {
    this.title = title;
    this.path = path;
}

// to add a method to an object i'm creating, create a prototype
Tab.prototype.isActive = function(activePath){
    return activePath == this.path;
};

//export it so i can use it
module.exports = Tab
