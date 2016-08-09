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
			}),
			knex('internal_notes').insert({
				business_id: find.findFromList('CashMoney', business, 'name'),
				account_id: find.findFromList('Laney', account, 'username'),
				notes: 'They are making so much money.'
			}),
			knex('internal_notes').insert({
				business_id: find.findFromList('School Clubz', business, 'name'),
				account_id: find.findFromList('Lucas', account, 'username'),
				notes: 'It makes me want to go back to school.'
			}),
			knex('internal_notes').insert({
				business_id: find.findFromList('Sick Clothes For Animals', business, 'name'),
				account_id: find.findFromList('Laney', account, 'username'),
				notes: 'My dog is pimped out wearing their sick clothes.'
			}),
			knex('internal_notes').insert({
				business_id: find.findFromList('Wonder Tech', business, 'name'),
				account_id: find.findFromList('Lucas', account, 'username'),
				notes: 'I wouldn\'t recommend them.'
			}),
			knex('internal_notes').insert({
				business_id: find.findFromList('Amazing Marketing Magic', business, 'name'),
				account_id: find.findFromList('Lucas', account, 'username'),
				notes: 'Not sure about how legit this business is yet.'
			}),
			knex('internal_notes').insert({
				business_id: find.findFromList('GardensAndMore', business, 'name'),
				account_id: find.findFromList('Laney', account, 'username'),
				notes: 'Some great looking gardens. Pleasure to work with.'
			})
		]);
	});
};
