exports.seed = function(knex, Promise) {
	return Promise.all([
		knex('industry').insert({name: 'Agriculture'}),
		knex('industry').insert({name: 'Construction'})
	]);
};
