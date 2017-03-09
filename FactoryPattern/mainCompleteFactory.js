var ServiceBook = require('./serviceBook');
var repoFactory = require('./repoFactoryComplete');

var car1 = new ServiceBook(repoFactory.serviceBook.get(1));
var car2 = new ServiceBook(repoFactory.serviceBook.get(2));

var user = repoFactory.user.get(1);
var project = repoFactory.project.get(1);

car1.user = user;
car1.project = project;

//console.log(car1);
car1.save();