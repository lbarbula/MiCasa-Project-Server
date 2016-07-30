exports.seed = function(knex, Promise) {
	return Promise.all([
		knex('industry').insert({type: 'Agriculture'}),
		knex('industry').insert({type: 'Construction'})
	]);
};
