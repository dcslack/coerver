/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  var app = new EmberApp(defaults);

  app.import('bower_components/bootstrap/dist/css/bootstrap.css');
  app.import('bower_components/bootstrap/dist/js/bootstrap.js');
  app.import('bower_components/font-awesome/css/font-awesome.css');

  if (app.env === 'development') {
    var dotenv = require('dotenv');
    var env = require('fs').readFileSync('env/development', 'utf-8');
    var writeFile = require('broccoli-file-creator');

    env = JSON.stringify(dotenv.parse(env));

    var tree = writeFile('__/env.js', 'window.__env = ' + env + ';');

    return app.toTree(tree);
  }

  if (app.env === 'production') {
    var dotenv = require('dotenv');
    var env = require('fs').readFileSync('env/production', 'utf-8');
    var writeFile = require('broccoli-file-creator');

    env = JSON.stringify(dotenv.parse(env));

    var tree = writeFile('__/env.js', 'window.__env = ' + env + ';');

    return app.toTree(tree);
  }

  return app.toTree();
};
