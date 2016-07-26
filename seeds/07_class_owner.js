var find = require('../helper.js');

exports.seed = function(knex, Promise) {
	return Promise.all([
		knex('class').select(),
		knex('owner').select()
	]).then(function(result) {
		var className = result[0];
		var owner = result[1];
		return Promise.all([
			knex('class_owner').insert({
				owner_id: find.findFromList('Kristie', owner, 'first_name'),
				class_id: find.findFromList('Business Breakthrough', className, 'name'),
				did_graduate: true
			}),
			knex('class_owner').insert({
				owner_id: find.findFromList('Alex', owner, 'first_name'),
				class_id: find.findFromList('Business Success', className, 'name'),
				did_graduate: true
			}),
			knex('class_owner').insert({
				owner_id: find.findFromList('Alex', owner, 'first_name'),
				class_id: find.findFromList('Dreambuilder', className, 'name'),
				did_graduate: false
			})
		]);
	});
};
