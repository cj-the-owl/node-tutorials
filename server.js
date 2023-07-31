// var http = require('http');

// var server = http.createServer(function (req, res) {

// });

// server.listen(5000);

// console.log('NOde.js web server at port 5000 is running')

var http = require('http');

var server = http.createServer(function (req, res) {

    if (req.url == '/data') {
        res.writeHead(200, { 'Content-Type': 'application/json'});
        res.write(JSON.stringify({ message: "Hello fellow World"}));
        res.end();
    }
});

// var server = http.createServer(function (req, res) {
//     if (req.url == '/') {

//         res.writeHead(200, { 'Content-Type': 'text/html'});
        

//         res.write('<html><body><p>Hello! This is a page</p></body></html>');
//         res.end();
//     }
//     else if (req.url == "/student") {

//         res.writeHead(200, { 'Content-Type': 'text/html'});
//         res.write('<html><body><p>Hello again! This is also a page</p></body></html>');
//         res.end();
//     }
//     else
//         res.end('Sorry dude! Its an invalid request!');
// });

server.listen(5000);

console.log('Node.js web server or whatever at port 5000 is vibing- I mean running..')