exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('users', function (table) {
    table.increments();
    table.string('first_name');
    table.string('last_name');
    table.string('username');
    table.string('email');
    table.string('password');
    table.boolean('is_designer');
    table.boolean('is_admin');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users');
};
