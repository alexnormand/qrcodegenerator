
/**
 * Module dependencies.
 */

var express = require('express'),
    stylus  = require('stylus'),
    nib     = require('nib'),    
    routes = require('./routes');

var app = module.exports = express.createServer();

// Configuration

app.configure(function () {
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(stylus.middleware({
      src: __dirname + '/public',
      compile: function (str, path) {
          return stylus(str)
              .set('filename', str)
              .set('compress', true)
              .use(nib())
              .import('nib');          
      }
  }));
  app.use(app.router);
  app.use(express.static(__dirname + '/public'));
});

app.configure('development', function () {
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

app.configure('production', function () {
  app.use(express.errorHandler());
});

// Routes

app.get('/:text', routes.getQRCodeImage);

app.get('/', routes.index);

app.listen(3000, function () {
  console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);
});
