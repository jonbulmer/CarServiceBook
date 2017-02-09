var ServiceBook = require('./serviceBook');

var car1 = new ServiceBook('Mr H Wells','E12');
var car2 = new ServiceBook('Mrs B Garce','G5');
var car3 = new ServiceBook('Mr R Dellman','M5');
var car4 = new ServiceBook('Dr V Johnson','M4');

car1.save();
car1.complete();