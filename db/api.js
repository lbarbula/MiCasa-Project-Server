var knex = require('./knex');

module.exports = {
  findAllBusinesses: function (type) {
    return knex('business').select();
  },
  findAllOwners: function () {
    return knex('owner').select();
  }
};
