"use strict";
/* GET home page. */
class Pinkos {
  constructor() {
    const express = require('express');
    const router = express.Router();

    router.get('/', function (req, res) {
      // RETURN ALL PINKOS PLZ
      app.services.Database.initialize();
      res.json(app.services.Database.getPinkos());
    });

    router.get('/:id', function (req, res) {
      // RETURN A PINKO PLZ
      app.services.Database.initialize();
      res.send(app.services.Database.getPinkos(req.params.id));
    });
    
    router.post('/:id1/:id2', function (req, res) {
      // TODO: REMOVE!
      app.services.Database.initialize();
      let freshPinko = app.services.Database.merge(req.params.id1, req.params.id2);
      res.json(freshPinko);
    });

    app.use('/pinkos', router);
  }
}


module.exports = function () { return new Pinkos() };
