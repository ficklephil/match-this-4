/**
 * Main application routes
 */

'use strict';

var errors = require('./components/errors');
var express = require('express');
var controller = require('./api/product/product.controller');

var router = express.Router();

module.exports = function(app) {

  // Insert routes below
//  app.use('/api/product/:fts', require('./api/product'));
  app.use('/api/things', require('./api/thing'));

//    router.get('/', controller.index);
    app.route('/api/product/:fts')
        .get(controller.index);
  
  // All undefined asset or api routes should return a 404
  app.route('/:url(api|auth|components|app|bower_components|assets)/*')
   .get(errors[404]);

  // All other routes should redirect to the index.html
  app.route('/*')
    .get(function(req, res) {
      res.sendfile(app.get('appPath') + '/index.html');
    });
};
