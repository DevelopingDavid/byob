
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.table('series', function(table) {
      table.string('publisher');
    })
  ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.table('episodes', function(table) {
      table.dropColumn('publisher');
    })
  ]);
};
