
exports.up = function(knex, Promise) {
  return knex.schema.table('users', function (table) {
    table.integer('user_votes');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.table('users', function (table) {
    table.dropColumn('user_votes');
  })
};
