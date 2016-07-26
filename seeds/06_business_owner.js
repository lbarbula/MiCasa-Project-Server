var find = require('../helper.js');

exports.seed = function(knex, Promise) {
	return Promise.all([
		knex('business').select(),
		knex('owner').select()
	]).then(function(result) {
		var business = result[0];
		var owner = result[1];
		return Promise.all([
			knex('business_owner').insert({
				owner_id: find.findFromList('Kristie', owner, "first_name"),
				business_id: find.findFromList('General Duffy\'s Hot Sauce Emporium', business, "name")
			}),
			knex('business_owner').insert({
				owner_id: find.findFromList('Alex', owner, "first_name"),
				business_id: find.findFromList('Bonkers', business, "name")
			})
		]);
	});
};
