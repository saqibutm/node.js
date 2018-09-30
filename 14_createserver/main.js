var http = require('http');

var server =  http.createServer(function(req,res){
    console.log('Request is made from ' + req.url);
    res.writeHead(200, {'Content-Type': 'text/plain' });
    res.end('Welcome to my Server');
});

server.listen(3000, '127.0.0.1');

console.log('I am listening on 3000');
