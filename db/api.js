var knex = require('./knex');

module.exports = {
  findAllBusinessesAndIndustry: function (type) {
    return knex('business').select()
    .join('industry', function() {
      this.on('business.industry_id', '=', 'industry.id')
    });
  },
  findAllOwners: function () {
    return knex('owner').select();
  }
};
