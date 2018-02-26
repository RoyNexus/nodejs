'use strict';

const express = require('express'),
    http = require('http');

var hostname = 'localhost';
var port = 3000;

var app = express();

app.use(function (req, res, next) {
  console.log(req.headers);
  res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
  res.end('<html><body><h1>Hello World</h1><h2>Second header</h2><p>Texto en un párrafo</body></html>');
});

var server = http.createServer(app);

server.listen(port, hostname, function(){
  console.log(`Server running at http://${hostname}:${port}/`);
});
