
exports.up = function(knex, Promise) {
  return knex.schema.table('products', function (table) {
    table.integer('votes');
     table.boolean('for_sale');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.table('products', function (table) {
    table.dropColumn('votes');
    table.dropColumn('for_sale');
  })
};
