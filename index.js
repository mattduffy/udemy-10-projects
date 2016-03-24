'use strict';
const cfg = require('./config')
  , express = require('express')
  , app = express()
  ;

console.log(cfg);
app.listen(cfg.PORT, (err)=>{
  console.log("express listening on ", cfg.PORT);
});
