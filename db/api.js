var knex = require('./knex');

module.exports = {
  findAllBusinesses: function (type) {
    return knex('business').select();
  }
};
