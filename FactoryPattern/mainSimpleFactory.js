var ServiceBook = require('./serviceBook');
var repoFactory = require('./repoFactory');

var car1 = new ServiceBook(repoFactory.getRepo('serviceBook').get(1));
var car2 = new ServiceBook(repoFactory.getRepo('serviceBook').get(2));

var user = repoFactory.getRepo('user').get(1);
var project = repoFactory.getRepo('project').get(1);

car1.user = user;
car1.project = project;

//console.log(car1);
car1.save();