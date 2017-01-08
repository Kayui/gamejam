"use strict";

const express = require('express'),
    path = require('path'),
    fs = require('fs'),
    favicon = require('serve-favicon'),
    logger = require('morgan'),
    cookieParser = require('cookie-parser'),
    bodyParser = require('body-parser'),
    loader = require('./loader');


global.app = express();
const clientJSFiles = fs.readdirSync('./clientjs');
app.clientJSFile = "";

clientJSFiles.forEach(function(fname) {
    if (/^.*\.js$/.test(fname)) {
        app.clientJSFile += fs.readFileSync(path.join('./clientjs/', fname), 'utf8').toString();
    }
});

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


loader
  .into("app")
  .include("services")
  .include("routes");

app.listen(8080, function () {
  console.log('Game listening on port 8080')
});



module.exports = app;
