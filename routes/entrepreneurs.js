var express = require('express');
var router = express.Router();
var db = require('../db/api')


router.get('/', function(req, res, next) {
    db.findAllOwners().then(function(data) {
    console.log(data);
    res.json(data)
  });
});
router.post('/add', function(req, res, next){
  db.addOwner(req.body)
  .then(function(data){
    console.log(data)
    res.json(data)
  })
})

module.exports = router;
