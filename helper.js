module.exports = {
  findFromList: function (name, tableName, field) {
    for (var i = 0; i < tableName.length; i++) {
      if (name === tableName[i][field]) {
        return tableName[i].id
      }
    }
  }
}
