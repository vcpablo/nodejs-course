var config = require('./config');

module.exports = {
    getConnectionString: function() {
        return 'mongodb://' + config.username + ':' + config.password + '@ds155325.mlab.com:55325/node-todo-db';
    }
}