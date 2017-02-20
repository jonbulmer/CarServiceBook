var Repo = require('./carServiceRepository')

var ServiceBook = function(data) {
    this.name = data.name;
    this.registration = data.registration;
    this.completed = false;
}

ServiceBook.prototype.complete = function () {
    console.log('Job Done for ' + this.name);
    this.completed = true;
}

ServiceBook.prototype.save = function () {
    console.log('saving Book for ' + this.name + ' car reg ' + this.registration);  
    Repo.save(this);
}

module.exports = ServiceBook;