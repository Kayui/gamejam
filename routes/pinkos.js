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

    router.get('/merge', function (req, res) {
      // NOW RANDOMLY KISS!
      app.services.Database.initialize();
      
      var id1 = 0;
      var id2 = 0;
      var maxID = app.services.Database.getMaxID();
      do {
        id1 = Math.random() * (maxID - 0) + 0;
        id2 = Math.random() * (maxID - 0) + 0;
      }
      while (id1 === id2)

      let parent1 = app.services.Database.getPinkos(id1);
      let parent2 = app.services.Database.getPinkos(id2);
      let freshPinko = app.services.Database.merge(id1, id2);

      let pinkoFamily = {
        "parent1": parent1,
        "parent2": parent2,
        "child": freshPinko
      };

      res.json(pinkoFamily);
    });

    router.get('/:id(\\d+)', function (req, res) {
      // RETURN A PINKO PLZ
      app.services.Database.initialize();
      res.send(app.services.Database.getPinkos(req.params.id));
    });

    router.get('/:id1/:id2', function (req, res) {
      // NOW KISS!
      app.services.Database.initialize();
      let freshPinko = app.services.Database.merge(req.params.id1, req.params.id2);
      res.json(freshPinko);
    });

    app.use('/pinkos', router);
  }
}


module.exports = function () { return new Pinkos() };