exports.up = function(knex, Promise) {
  return knex.schema.table('products', function (table) {
    table.foreign('user_id').references('users.id');
  });
};

exports.down = function(knex, Promise) {
    return knex.schema.table('products', function (table) {
      table.dropForeign('user_id');
    });
};
