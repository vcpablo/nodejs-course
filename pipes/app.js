var fs = require('fs');
var zlib = require('zlib');

// Readable stream
var readable = fs.createReadStream(__dirname + '/greet.txt');

// Writable streams
var writable = fs.createWriteStream(__dirname + '/greetcopy.txt');
var compressed = fs.createWriteStream(__dirname + '/greet.txt.gz');

// Transform stream
var gzip = zlib.createGzip();

readable.pipe(writable);

// Method chaining / cascading (.pipe(dest) returns the destination)
readable.pipe(gzip).pipe(compressed);