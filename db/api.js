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
  },
  findBusinessesAndOwners: function () {
    return knex('business')
    .select()
    .join('industry', function() {
      this.on('business.industry_id', '=', 'industry.id')
    })
    .join('business_owner', function() {
      this.on('business.id', '=', 'business_owner.business_id')
    })
    .join('owner', function() {
      this.on('business_owner.owner_id', '=', 'owner.id')
    })
  },
  findBusinessesAndOwnersById: function (id) {
    return knex('business')
    .select()
    .join('industry', function() {
      this.on('business.industry_id', '=', 'industry.id')
    })
    .join('business_owner', function() {
      this.on('business.id', '=', 'business_owner.business_id')
    })
    .join('owner', function() {
      this.on('business_owner.owner_id', '=', 'owner.id')
    })
    .where('business.id', '=', id);

  }
};
