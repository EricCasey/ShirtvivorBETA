exports.seed = function(knex, Promise) {
  return knex('lineitems').del()
    .then(function () {
      return Promise.all([
      //   knex('lineitems').insert({
      //     id: 1,
      //     order_id: 1,
      //     product_id: 1,
      //     user_id: 1
      //   }),
      //   knex('lineitems').insert({
      //     id: 2,
      //     order_id: 1,
      //     product_id: 2,
      //     user_id: 1
      // })
      ]);
    });
};
