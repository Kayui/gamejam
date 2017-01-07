"use strict";
/* GET home page. */
class jsloader {
  constructor() {
    const express = require('express');
    const router = express.Router();
    router.get('/', function (req, res) {
			res.send(200, app.clientJSFile);
    });
    app.use('/js', router);
  }
}


module.exports = function() { return new jsloader()};
