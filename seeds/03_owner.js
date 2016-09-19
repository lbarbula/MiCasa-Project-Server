exports.seed = function(knex, Promise) {
	return Promise.all([
		knex('owner').insert({
			first_name: 'Kristie',
			last_name: 'Smith',
			email: 'ksmith@whatevx.com',
			ownerPhone: '4567890123',
			gender: 'Male',
			languageSpoken: 'English',
			isMinority: false
		}),
		knex('owner').insert({
			first_name: 'Alex',
			last_name: 'James',
			email: 'ajames@whatevs.com',
			ownerPhone: '7890123456',
			gender: 'Male',
			languageSpoken: 'English',
			isMinority: false
		}),
		knex('owner').insert({
			first_name: 'Laurence',
			last_name: 'Smith',
			email: 'lsmith@gmail.com',
			ownerPhone: '7890123412',
			gender: 'Male',
			languageSpoken: 'English',
			isMinority: false
		}),
		knex('owner').insert({
			first_name: 'Piggot',
			last_name: 'McHill',
			email: 'pighill@yahoo.com',
			ownerPhone: '7890413456',
			gender: 'Male',
			languageSpoken: 'English',
			isMinority: false
		}),
		knex('owner').insert({
			first_name: 'Jeremy',
			last_name: 'Irons',
			email: 'Jazza@hotmail.com',
			ownerPhone: '3320123456',
			gender: 'Male',
			languageSpoken: 'English',
			isMinority: false
		}),
		knex('owner').insert({
			first_name: 'Ron',
			last_name: 'Weasel',
			email: 'RWeez@underground.com',
			ownerPhone: '7899123998',
			gender: 'Male',
			languageSpoken: 'English',
			isMinority: false
		}),
		knex('owner').insert({
			first_name: 'Samantha',
			last_name: 'Umbur',
			email: 'SamUmbz@whatevs.com',
			ownerPhone: '1234568811',
			gender: 'Male',
			languageSpoken: 'English',
			isMinority: false
		}),
		knex('owner').insert({
			first_name: 'Sizzle',
			last_name: 'McBizzle',
			email: 'sizzbizz@getmoney.com',
			ownerPhone: '5432198888',
			gender: 'Male',
			languageSpoken: 'English',
			isMinority: false
		}),
	]);
};
