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
  console.log("req.body", req.body);
  db.addOwner(req.body[0])
  .then(function(data){
    console.log("data", data)
    db.addClassOwner(data[0], req.body[1]).then(function() {
    res.json(data)
    })
  })
})

module.exports = router;
