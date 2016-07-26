exports.seed = function(knex, Promise) {
	return Promise.all([
		knex('account').insert({
			username: 'Lucas',
			password: 'abc',
			is_admin: true
		}),
		knex('account').insert({
			username: 'Laney',
			password: '123',
			is_admin: false
		})
	]);
};
