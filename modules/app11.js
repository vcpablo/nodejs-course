var util = require('util');

var name = 'Tony';

var greeting = util.format('Hello, %s', name);
util.log(greeting)

// Avoid using core modules names in custom modules