exports.seed = function(knex, Promise) {
	return knex('internal_notes').del()
		.then(function() {
			return knex('class_owner').del()
		}).then(function() {
			return knex('business_owner').del()
		}).then(function() {
			return knex('business').del()
		}).then(function() {
			return knex('owner').del()
		}).then(function() {
			return knex('class').del()
		}).then(function() {
			return knex('account').del()
		})
}
