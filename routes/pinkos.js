"use strict";
/* GET home page. */
class Pinkos {
  constructor() {
    const express = require('express');
    const router = express.Router();

    router.get('/', function (req, res) {
      // RETURN ALL PINKOS PLZ
      app.services.Database.initialize();
      let pinkos = app.services.Database.getPinkos();
      console.log("hey");

      let count = 0;
      let sum = 0;
      for (var key in pinkos) {
        if (pinkos.hasOwnProperty(key)) {
          sum += pinkos[key].political;
          count++;
        }
      }
      
      let average = Math.floor(sum/count);
      for (var key in pinkos) {
        if (pinkos.hasOwnProperty(key)) {
          pinkos[key].average = average;
          pinkos[key].averageName = app.services.Politics.getPolitics(average);
        }
      }
      
      res.json(pinkos);
    });

    router.get('/:id/dialog/', function (req, res) {
      app.services.Database.initialize();
      res.json(app.services.Dialogs.getDialog(req.params.id));
    });

    router.get('/:id/dialog/:dialogID/:dialogOptionID', function (req, res) {
      app.services.Database.initialize();
      res.json(app.services.Dialogs.processDialogOption(
        req.params.dialogID,
        req.params.dialogOptionID,
        req.params.id
      ));
    });

    router.get('/merge', function (req, res) {
      // NOW RANDOMLY KISS!
      app.services.Database.initialize();

      var id1 = 0;
      var id2 = 0;
      var maxID = app.services.Database.getMaxID();
      while (id1 === id2) {
        id1 = parseInt(Math.random() * (maxID - 0) + 0);
        id2 = parseInt(Math.random() * (maxID - 0) + 0);
      }

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

    router.get('/merge/:count', function (req, res) {
      // NOW RANDOMLY KISS ALOT!
      app.services.Database.initialize();
      for (let i = 0; i < req.params.count; i++) {
        var id1 = 0;
        var id2 = 0;
        var maxID = app.services.Database.getMaxID();
        while (id1 === id2) {
          id1 = parseInt(Math.random() * (maxID - 0) + 0);
          id2 = parseInt(Math.random() * (maxID - 0) + 0);
        }
        app.services.Database.merge(id1, id2);
      }
      res.json();
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