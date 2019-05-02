exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('series', function(table) {
      table.increments('id').primary();
      table.string('show');
      table.string('showDescription');
      table.string('genre');

      table.timestamps(true, true);
    }),

    knex.schema.createTable('episodes', function(table) {
      table.increments('id').primary();
      table.string('episodeTitle');
      table.string('description');
      table.integer("seriesId")
      table.foreign('seriesId')
        .references('series.id');

      table.timestamps(true, true);
    })
  ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('series'),
    knex.schema.dropTable('episodes')
  ]);
};
