'use strict';
const cfg = require('dotenv').config()
  , app = {}
  ;

app.title = "A new web application";
app.version = "0.0.1";
app.domain = "";
app.foo = "bar";

cfg.app = app;

module.exports = cfg;
