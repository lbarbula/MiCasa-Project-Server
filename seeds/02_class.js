exports.seed = function(knex, Promise) {
	return Promise.all([
		knex('class').insert({
			name: 'Business Success',
			year: '2014',
			semester: 'Fall'
		}),
		knex('class').insert({
			name: 'Business Breakthrough',
			year: '2015',
			semester: 'Spring'
		}),
		knex('class').insert({
			name: 'Dreambuilder',
			year: '2015',
			semester: 'Fall'
		})
	]);
};
