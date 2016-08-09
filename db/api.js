var knex = require('./knex');

module.exports = {
  getAllIndustries: function () {
    return knex('industry').select();
  },
  getAllCities: function () {
    return knex('business').select('city').distinct('city');
  },
  findAllBusinessesAndIndustry: function (type) {
    return knex('business').select()
    .join('industry', function() {
      this.on('business.industry_id', '=', 'industry.id');
    });
  },
  findAllOwners: function () {
    return knex('owner').select();
  },
  findBusinessesAndOwners: function () {
    return knex('business')
    .select()
    .join('industry', function() {
      this.on('business.industry_id', '=', 'industry.id');
    })
    .join('business_owner', function() {
      this.on('business.id', '=', 'business_owner.business_id');
    })
    .join('owner', function() {
      this.on('business_owner.owner_id', '=', 'owner.id');
    });
  },
  findBusinessesAndOwnersById: function (id) {
    return knex('business')
    .select()
    .join('industry', function() {
      this.on('business.industry_id', '=', 'industry.id');
    })
    .join('business_owner', function() {
      this.on('business.id', '=', 'business_owner.business_id');
    })
    .join('owner', function() {
      this.on('business_owner.owner_id', '=', 'owner.id');
    })
    .where('business.id', '=', id);

  },
  getCommentsById: function (id) {
    // console.log("hitting function");
    return knex('business')
    .select('business.id', 'internal_notes.business_id', 'internal_notes.account_id', 'account.username', 'internal_notes.notes')
    .join('internal_notes', function() {
      this.on('business.id', '=', 'internal_notes.business_id');
    })
    .join('account', function () {
      this.on('internal_notes.account_id', '=', 'account.id');
    })
    .where('business.id', '=', id);
  }
};
