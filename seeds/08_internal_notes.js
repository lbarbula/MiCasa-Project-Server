var find = require('../helper.js');

exports.seed = function(knex, Promise) {
	return Promise.all([
		knex('business').select(),
		knex('account').select()
	]).then(function(result) {
		var business = result[0];
		var account = result[1];
		return Promise.all([
			knex('internal_notes').insert({
				business_id: find.findFromList('Bonkers', business, 'name'),
				account_id: find.findFromList('Lucas', account, 'username'),
				notes: 'They stink!'
			}),
			knex('internal_notes').insert({
				business_id: find.findFromList('Bonkers', business, 'name'),
				account_id: find.findFromList('Laney', account, 'username'),
				notes: 'They\'re ok!'
			}),
			knex('internal_notes').insert({
				business_id: find.findFromList('General Duffy\'s Hot Sauce Emporium', business, 'name'),
				account_id: find.findFromList('Laney', account, 'username'),
				notes: 'whateerreererererrer!'
			})
		]);
	});
};
