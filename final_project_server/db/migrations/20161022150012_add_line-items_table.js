exports.up = function(knex, Promise) {
  return knex.schema.createTable('lineitems', function (table) {
    table.increments();
    table.integer('order_id');
    table.integer('product_id');
    table.integer('user_id');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('lineitems');
};
