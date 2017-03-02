var repo = function () {

    var db = {};

    var get = function (id) {
        console.log('Getting Service Book ' + id);
        return {
            name: 'Mr D Base',
            registration: 'D8'
        }
    }
    
    var save = function (serviceBook) {
        console.log('saving name:' + serviceBook.name + ' and reg ' 
                 + serviceBook.registration + ' to the db');
    }

    return {
        get: get,
        save: save
    }


}

module.exports = repo();