var ServiceBook = require('./serviceBook');
var sbRepo = require('./carServiceRepository');
var userRepo = require('./userRepository');
var projectRepo = require('./projectRepository');

var car1 = new ServiceBook(sbRepo.get(1));

var user = userRepo.get(1);
var project = projectRepo.get(1);

car1.user = user;
car1.project = project;

console.log(car1);
car1.save();



