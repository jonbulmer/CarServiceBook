var ServiceBook = require('./serviceBook');
var Repo = require('./carServiceRepository');

var car1 = new ServiceBook(Repo.get(1));

var car2 = new ServiceBook({name: 'Mrs B Garce',registration: 'G5'});
var car3 = new ServiceBook({name: 'Mr R Dellman',registration: 'M5'});
var car4 = new ServiceBook({name: 'Dr V Johnson',registration: 'M4'});

car1.save();
car1.complete();
car2.save();
car3.save();
car4.save();