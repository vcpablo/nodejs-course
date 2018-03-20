// Creating a web server / outputting HTML templates / Streams and Performanes / Routing
var http = require('http');
var fs = require('fs');

http.createServer(function(req, res) {
    if(req.url === '/') {
        fs.createReadStream(__dirname + '/index.htm').pipe(res);
    }
    // Routing
    else if(req.url === '/api') {
        res.writeHead(200, {
            'Content-Type': 'application/json'
        });

        // Returning Json
        var obj = {
            firstname: 'John',
            lastname: 'Doe'
        };

        res.end(JSON.stringify(obj));
    } else {
        res.writeHead(404);
        res.end();    
    }

    
    

    /*var html = fs.readFileSync(__dirname + '/index.htm', 'utf8');
    html = html.replace('{message}', 'Hello beautiful world!');
    res.end(html);*/

    // Using streams
    // fs.createReadStream(__dirname + '/index.htm', 'utf8').pipe(res);

    

}).listen(1337, '127.0.0.1');