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

// router.put('/:id/edit', function(req, res, next) {
//   db.editBusiness(req.body).then(function() {
//     res.json({message: "Business Updated"})
//   })
//
// });
/*

There is something going wrong with the business & owner lookup when the seeds are rerun, when clicking on Bonkers it was bringing up the General Duffy's Hot Sauce Emporium detail and visa versa.

*/

module.exports = router;
