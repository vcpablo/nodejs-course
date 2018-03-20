var Emitter = require('events');
var config = require('./config');

var emtr = new Emitter();

emtr.on(config.events.GREET, function() {
    console.log('Someone said hello');
});

emtr.on(config.events.GREET, function() {
    console.log('A greeting occurred!');
});

console.log('Hello!');
emtr.emit(config.events.GREET);