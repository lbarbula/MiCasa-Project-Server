var express = require('express');
var router = express.Router();
var db = require('../db/api')

router.get('/', function(req, res, next) {
	db.findBusinessesAndOwners().then(function(data) {
		res.json(data)
	});
});

router.get('/cities', function(req, res, next) {
	db.getAllCities().then(function(data) {
		res.json(data)
	});
});

router.get('/industries', function(req, res, next) {
	db.getAllIndustries().then(function(data) {
		res.json(data)
	});
});

router.get('/:id', function(req, res, next) {
	return Promise.all([
			db.getCommentsById(req.params.id),
			db.findBusinessesAndOwnersById(req.params.id)
		])
		.then(function(data) {
			res.json(data);
		})
})

router.put('/:id', function(req, res, next) {
	db.updateBusiness(req.body).then(function() {
		res.json({
			message: "Business Updated"
		})
	})
})

router.post('/:id/addNote', function(req, res, next) {
	db.addNote(req.body).then(function(){
		console.log('body', req.body)
		res.json({
			message: "Note Added"
		})
	})
})

module.exports = router;
