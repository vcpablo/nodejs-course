var fs = require('fs');

var readable = fs.createReadStream(__dirname + '/greet.txt',  {
    encoding: 'utf8',
    highWaterMark: 16 * 1024 // the size of each chunk in bytes
});

var writable = fs.createWriteStream(__dirname + '/greetcopy.txt');

readable.on('data', function(chunk) {
    console.log(chunk.length)
    writable.write(chunk);
});

readable.on('end', function() {
    console.log('Done!');
})