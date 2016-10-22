exports.seed = function(knex, Promise) {

  return knex('products').del()
    .then(
      function () {

      return Promise.all([
        knex('products').insert({
          id: 1,
          user_id: 1,
          image: '',
          name: 't-shirt number one',
          price_cents: 2999,
          description: 'omg this shirt is off the hook!'
        }),
        knex('products').insert({
          id: 2,
          user_id: 2,
          image: '',
          name: 't-shirt number two',
          price_cents: 2999,
          description: 'omg this shirt is off the heezy!'
        }),
        knex('products').insert({
          id: 3,
          user_id: 1,
          image: '',
          name: 't-shirt number three',
          price_cents: 2999,
          description: 'omg this shirt is off the chain!'
        })

      ]);
     });
};
