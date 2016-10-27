exports.up = function(knex, Promise) {
  return knex.schema.table('users', function (table) {
    table.string('image_submission');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.table('users', function (table) {
    table.dropColumn('image_submission');
  })
};
