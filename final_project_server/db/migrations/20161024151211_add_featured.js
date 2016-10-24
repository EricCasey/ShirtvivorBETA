
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('products', function (table) {
    table.increments();
    table.integer('user_id');
    table.string('image');
    table.string('name');
    table.integer('price_cents');
    table.string('description');
    table.boolean('featured');
  });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('products');
};
