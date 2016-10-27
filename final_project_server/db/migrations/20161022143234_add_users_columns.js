exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('users', function (table) {
    table.increments();
    table.string('first_name');
    table.string('last_name');
    table.string('email');
    table.string('password');
    table.string('is_designer');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users');
};
