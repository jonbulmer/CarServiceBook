var ServiceBook = function(name,registration) {
    this.name = name;
    this.registration = registration;
    this.completed = false;
}

ServiceBook.prototype.complete = function() {
    console.log('Job Done for ' + this.name);
    this.completed = true;
}

ServiceBook.prototype.save = function() {
    console.log('saving Book for ' + this.name + ' car reg ' + this.registration);    
}

module.exports = ServiceBook;