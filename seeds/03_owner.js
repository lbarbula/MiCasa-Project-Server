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
		}),
		knex('owner').insert({
			first_name: 'Laurence',
			last_name: 'Smith',
			email: 'lsmith@gmail.com',
			phone: '7890123412'
		}),
		knex('owner').insert({
			first_name: 'Piggot',
			last_name: 'McHill',
			email: 'pighill@yahoo.com',
			phone: '7890413456'
		}),
		knex('owner').insert({
			first_name: 'Jeremy',
			last_name: 'Irons',
			email: 'Jazza@hotmail.com',
			phone: '3320123456'
		}),
		knex('owner').insert({
			first_name: 'Ron',
			last_name: 'Weasel',
			email: 'RWeez@underground.com',
			phone: '7899123998'
		}),
		knex('owner').insert({
			first_name: 'Samantha',
			last_name: 'Umbur',
			email: 'SamUmbz@whatevs.com',
			phone: '1234568811'
		}),
		knex('owner').insert({
			first_name: 'Sizzle',
			last_name: 'McBizzle',
			email: 'sizzbizz@getmoney.com',
			phone: '5432198888'
		}),
	]);
};
