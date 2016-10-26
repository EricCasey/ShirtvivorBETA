exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('sessions', function (table) {
    table.increments();
    table.string('token');
    table.integer('user_id').unsigned()
    table.foreign('user_id').references('users.id');
  });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('sessions');
};
