var repoFactory =  function () {
    var repos = this;
    var repoList = [{name:'serviceBook', source:'./carServiceRepository'},
                    {name:'user', source:'./userRepository'},
                    {name:'project', source:'./projectRepository'}];

    repoList.forEach(function(repo) {
        repos[repo.name] = require(repo.source)
    });
};

module.exports = new repoFactory;
