exports.seed = function(knex, Promise) {
	return Promise.all([
		knex('industry').insert({name: 'Accounting'}),
		knex('industry').insert({name: 'Arts & Entertainment'}),
		knex('industry').insert({name: 'Beauty'}),
		knex('industry').insert({name: 'Child Care'}),
		knex('industry').insert({name: 'Cleaning'}),
		knex('industry').insert({name: 'Construction'}),
		knex('industry').insert({name: 'Education'}),
		knex('industry').insert({name: 'Electric'}),
		knex('industry').insert({name: 'Food Service'}),
		knex('industry').insert({name: 'Health'}),
		knex('industry').insert({name: 'HR'}),
		knex('industry').insert({name: 'Insurance'}),
		knex('industry').insert({name: 'Marketing'}),
		knex('industry').insert({name: 'Landscaping'}),
		knex('industry').insert({name: 'Non-Profit'}),
		knex('industry').insert({name: 'Plumbing'}),
		knex('industry').insert({name: 'Real Estate'}),
		knex('industry').insert({name: 'Sports & Fitness'}),
		knex('industry').insert({name: 'Technology'}),
		knex('industry').insert({name: 'Travel'}),
		knex('industry').insert({name: 'Other'})
	]);
};
