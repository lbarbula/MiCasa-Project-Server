var express = require('express');
var router = express.Router();
var db = require('../db/api')


router.get('/', function(req, res, next) {
  db.findBusinessesAndOwners().then(function(data) {
  console.log(data);
  res.json(data)
});
});

module.exports = router;
