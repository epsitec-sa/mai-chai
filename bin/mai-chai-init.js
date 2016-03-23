'use strict';
/* global require */
/* global process */

var fs = require ('fs');
var path = require ('path');

var mkdirSync = function (path) {
  try {
    fs.mkdirSync (path);
  } catch (e) {
    if (e.code !== 'EEXIST') {
      throw e;
    }
  }
};

var cwd = process.cwd ().replace (/\\/g, '/');
var suffix = '/node_modules/mai-chai';

if (cwd.endsWith (suffix)) {
  var root = cwd.substr (0, cwd.length - suffix.length);
  var test = path.join (root, 'test');
  var files = fs.readdirSync (path.join (cwd, 'templates'));

  mkdirSync (test);
  mkdirSync (path.join (root, 'src'));
  mkdirSync (path.join (root, 'src.test'));

  var regex = /\r\n/g;
  var newline = '\n';
  if (process.platform === 'win32') {
    regex = /([^\r])\n/g;
    newline = '$1\r\n';
  }

  files.forEach (function (file) {
    var data = fs.readFileSync (path.join (cwd, 'templates', file));
    if (file.substr (0, 2) === '--') {
      var name = file.substr (2, file.length - 2);
      fs.writeFileSync (path.join (root, name), data.toString ().replace (regex, newline));
    } else {
      fs.writeFileSync (path.join (test, file), data.toString ().replace (regex, newline));
    }
  });
}
