'use strict';
/* global require */
/* global process */

var fs = require ('fs');
var path = require ('path');

var mkdirSync = function (path) {
  try {
    fs.mkdirSync (path);
  } catch (e) {
    if (e.code != 'EEXIST') throw e;
  }
}

var cwd = process.cwd ().replace (/\\/g, '/');
var suffix = '/node_modules/mai-chai';

if (cwd.endsWith (suffix)) {
  var root = cwd.substr (0, cwd.length - suffix.length);
  var test = path.join (root, 'test');
  var files = fs.readdirSync (path.join (cwd, 'templates'));
  
  mkdirSync (test);
  
  files.forEach (function (file) {
    var data = fs.readFileSync (path.join (cwd, 'templates', file));
    fs.writeFileSync (path.join (test, file), data);
  });
}

