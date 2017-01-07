"use strict";
/* GET home page. */
class Index {
  constructor() {
    const express = require('express');
    const router = express.Router();
    router.get('/', function (req, res) {
      // If the database is empty, initialize it
      app.services.Database.initialize();
      res.render('index');
    });
    app.use(router);
  }
}


module.exports = function() { return new Index()};
