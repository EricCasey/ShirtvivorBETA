exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('orders', function (table) {
    table.increments();
    table.integer('user_id');
    table.integer('total_price_cents');
    table.string('stripe_order_token');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('orders');
};
