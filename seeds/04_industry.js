exports.seed = function(knex, Promise) {
	return Promise.all([
		knex('industry').insert({type: 'Accounting'}),
		knex('industry').insert({type: 'Arts & Entertainment'}),
		knex('industry').insert({type: 'Beauty'}),
		knex('industry').insert({type: 'Child Care'}),
		knex('industry').insert({type: 'Cleaning'}),
		knex('industry').insert({type: 'Construction'}),
		knex('industry').insert({type: 'Education'}),
		knex('industry').insert({type: 'Electric'}),
		knex('industry').insert({type: 'Food Service'}),
		knex('industry').insert({type: 'Health'}),
		knex('industry').insert({type: 'HR'}),
		knex('industry').insert({type: 'Insurance'}),
		knex('industry').insert({type: 'Marketing'}),
		knex('industry').insert({type: 'Landscaping'}),
		knex('industry').insert({type: 'Non-Profit'}),
		knex('industry').insert({type: 'Plumbing'}),
		knex('industry').insert({type: 'Real Estate'}),
		knex('industry').insert({type: 'Sports & Fitness'}),
		knex('industry').insert({type: 'Technology'}),
		knex('industry').insert({type: 'Travel'}),
		knex('industry').insert({type: 'Other'})
	]);
};
