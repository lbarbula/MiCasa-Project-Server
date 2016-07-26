var express = require('express');
var router = express.Router();
// var db = require('../db/api');
var path = require('path');

/* GET home page. */
// router.get('/', function(req, res, next) {
//   db.findAllBusinesses().then(function(data) {
//     console.log(data);
//     res.render('index', { businesses: data });
//   })
// });

router.get('/', function(req, res, next) {
  res.sendFile(path.join(__dirname, '../views', 'index.html'));
});


module.exports = router;
