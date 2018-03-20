var fs = require('fs'); //file system

/**
 * Using this kinda file reading, it's actually buffering its content to memoryß
 */
var greet = fs.readFileSync(__dirname + '/greet.txt', 'utf8');
console.log(greet);

var greet2 = fs.readFile(__dirname + '/greet.txt', 'utf8', function(err, data) {
   console.log(data); 
});

console.log('Done!');