exports.seed = function(knex, Promise) {
  return knex('orders').del()
    .then(function () {
      return Promise.all([
      //   knex('orders').insert({
      //     id: 1,
      //     order_id: 1,
      //     total_price_cents: 2912309
      //   }),
      //   knex('orders').insert({
      //     id: 2,
      //     order_id: 2,
      //     total_price_cents: 743309
      // })
      ]);
    });
};
