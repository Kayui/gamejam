"use strict";
/* GET home page. */
class Pinkos {
  constructor() {
    const express = require('express');
    const router = express.Router();

    router.get('/', function (req, res) {
      // RETURN ALL PINKOS PLZ
      res.json(app.services.Database.getPinkos());
    });

    router.get('/:id', function (req, res) {
      // RETURN A PINKO PLZ
      res.send(app.services.Database.getPinkos(req.params.id));
    });
    
    router.post('/', function (req, res) {
      // CREATE NEW PINKO PLZ
      res.json('{hey: "this kinda works"}');
    });

    app.use('/pinkos', router);
  }
}


module.exports = function () { return new Pinkos() };
