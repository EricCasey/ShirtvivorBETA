exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('lineitems', function (table) {
    table.increments();
    table.integer('order_id');
    table.integer('product_id');
    table.integer('quantity');
    table.integer('item_price_cents');
    table.integer('total_price_cents');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('lineitems');
};
