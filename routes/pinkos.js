"use strict";
/* GET home page. */
class Pinkos {
  constructor() {
    const express = require('express');
    const router = express.Router();
    router.get('/', function (req, res) {
      res.json(app.data.Pinkos.getJSON());
    });
    app.use('/pinkos', router);
  }
}


module.exports = function() { return new Pinkos()};
