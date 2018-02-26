'use strict';

const express = require('express'),
    http = require('http');

var hostname = 'localhost';
var port = 3000;

var app = express();

app.use(function (req, res, next) {
  console.log(req.headers);
  res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
  var respuesta = {
    nombre: "nombre de pepito",
    email: "miemail@email.com",
    telefono: "666644444",
    direccion: "calle de las huertas"
  }

  res.end(JSON.stringify(respuesta));
});

var server = http.createServer(app);

server.listen(port, hostname, function(){
  console.log(`Server running at http://${hostname}:${port}/`);
});
