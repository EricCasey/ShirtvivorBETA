exports.up = function(knex, Promise) {
  return knex.schema.createTable('orders', function (table) {
    table.increments();
    table.integer('order_id');
    table.integer('total_price_cents');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('orders');
};
