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
    db.findBusinessByEntrepreneurId(req.params.id)
  ])
  .then(function(data) {
    res.json(data);
  });
});

router.get('/:id/delete', function(req, res, next) {
	db.deleteEntrepreneurById(req.params.id)
	.then(function() {
		res.json({
			message: "Entrepreneur Deleted"
		});
	})
})

router.post('/:id/addClassToOwner', function(req, res, next) {
  db.addClassOwner(req.params.id, req.body).then(function() {
    res.json({
			message: "Class Added"
		})
  })
})

router.put('/:id', function(req, res, next) {
	db.updateEntrepreneur(req.body)
  .then(function() {
		res.json({
			message: "Business Updated"
		})
	})
})

router.post('/add', function(req, res, next){
  db.addOwner(req.body[0])
  .then(function(data){
    console.log("data", data)
    db.addClassOwner(data[0], req.body[1]).then(function() {
    res.json(data)
    })
  })
})

module.exports = router;
