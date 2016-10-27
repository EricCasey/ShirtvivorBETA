exports.seed = function(knex, Promise) {
  return knex('lineitems').del().then(function() {
      return knex('orders').del()
    })
    .then(function() {
      return knex('products').del()
    })
    .then(function() {
      return knex('sessions').del()
    })
    .then(function() {
      return knex('users').del()
    })
};
