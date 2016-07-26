exports.seed = function(knex, Promise) {
	return Promise.all([
		knex('owner').insert({
			first_name: 'Kristie',
			last_name: 'Smith',
			email: 'ksmith@whatevx.com',
			phone: '4567890123'
		}),
		knex('owner').insert({
			first_name: 'Alex',
			last_name: 'James',
			email: 'ajames@whatevs.com',
			phone: '7890123456'
		})
	]);
};
