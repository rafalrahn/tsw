(function() {
  var HOST, PORT, SNAKE_LENGTH, STAGE_HEIGHT, STAGE_WIDTH, Snake, autoClient, checkCollisions, fs, http, io, port, send404, server, snakes, socket, sys, tick, updateState, url, util;
  sys = require('sys');
  http = require('http');
  util = require('util');
  url = require('url');
  io = require('socket.io');
  fs = require('fs');
  HOST = null;
  PORT = 9980;
  STAGE_WIDTH = 49;
  STAGE_HEIGHT = 49;
  SNAKE_LENGTH = 8;
  Array.prototype.remove = function(e) {
    var t, _ref;
    if ((t = this.indexOf(e)) > -1) {
      return ([].splice.apply(this, [t, t - t + 1].concat(_ref = [])), _ref);
    }
  };
  autoClient = 1;
  snakes = [];
  /* Server */
  server = http.createServer(function(req, res) {
    var path;
    path = url.parse(req.url).pathname;
    switch (path) {
      case '/':
      case '/index.html':
      case '/client.js':
      case '/style.css':
        if (path === '/') {
          path = '/index.html';
        }
        return fs.readFile(__dirname + path, function(err, data) {
          if (err) {
            send404(res);
          } else {
            res.writeHead(200, 'text/html');
          }
          res.write(data, 'utf8');
          return res.end();
        });
      default:
        return send404(res);
    }
  });
  send404 = function(res) {
    res.writeHead(404);
    res.write('404');
    return res.end();
  };
  server.listen(port = Number(process.env.PORT || PORT));
  /* Snake Class */
  Snake = (function() {
    function Snake(id) {
      this.id = id;
      this.reset();
      this.kills = 0;
      this.deaths = 0;
    }
    Snake.prototype.addKill = function() {
      this.kills++;
      return this.length = this.elements.unshift([-1, -1]);
    };
