/*jshint node:true*/
module.exports = function(app) {
  var express = require('express');
  var thingRouter = express.Router();

  thingRouter.get('/', function(req, res) {
    res.send({
      'thing': []
    });
  });

  thingRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  thingRouter.get('/:id', function(req, res) {
    res.send({
      'thing': {
        id: req.params.id
      }
    });
  });

  thingRouter.put('/:id', function(req, res) {
    res.send({
      'thing': {
        id: req.params.id
      }
    });
  });

  thingRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/ddau/thing', thingRouter);
};
