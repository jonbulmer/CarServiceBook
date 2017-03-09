var repoFactory =  function () {

    this.getRepo = function (repoType) {
        if (repoType === 'serviceBook') {
            if (this.sbRepo) {
                console.log('Retriveving from cache');
                return this.sbRepo; 
            } else {
                var sbRepo = require('./carServiceRepository');
                return sbRepo;
            }
        }
        if (repoType === 'user') {
            var userRepo = require('./userRepository');
            return userRepo;
        }
        if (repoType === 'project') {
            var  projectRepo = require('./projectRepository'); 
            return projectRepo;
        }                
    }
};

module.exports = new repoFactory;