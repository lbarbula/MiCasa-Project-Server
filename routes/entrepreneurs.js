var express = require('express');
var router = express.Router();
var db = require('../db/api')


router.get('/', function(req, res, next) {
    db.findAllOwners().then(function(data) {
    res.json(data)
  });
});

router.get('/:id', function(req, res, next) {
  return Promise.all([
    db.findEntrepreneurById(req.params.id),
    db.findClassesById(req.params.id),
    db.findBusinessesAndOwnersById(req.params.id)
  ])
  .then(function(data) {
    res.json(data);
  });
});

router.post('/add', function(req, res, next){
  db.addOwner(req.body)
  .then(function(data){
    res.json(data)
  })
})

module.exports = router;
