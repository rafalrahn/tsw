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
