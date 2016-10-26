exports.seed = function(knex, Promise) {

  return knex('products').del()
    .then(
      function () {

      return Promise.all([
        knex('products').insert({
          id: 1,
          user_id: 1,
          image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Chess_klt45.svg/2000px-Chess_klt45.svg.png',
          name: 't-shirt number one',
          price_cents: 2999,
          description: 'omg this shirt is off the hook!',
          featured: true
        }),
        knex('products').insert({
          id: 2,
          user_id: 2,
          image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Chess_qlt45.svg/2000px-Chess_qlt45.svg.png',
          name: 't-shirt number two',
          price_cents: 2999,
          description: 'omg this shirt is off the heezy!',
          featured: true
        }),
        knex('products').insert({
          id: 3,
          user_id: 3,
          image: '',
          name: 't-shirt number three',
          price_cents: 2999,
          description: 'omg this shirt is off the chain!',
          featured: true
        }),
        knex('products').insert({
          id: 4,
          user_id: 3,
          image: '',
          name: 't-shirt number four',
          price_cents: 2999,
          description: 'omg this shirt is off the asdfkh!',
          featured: true
        }),
        knex('products').insert({
          id: 5,
          user_id: 1,
          image: '',
          name: 't-shirt number five',
          price_cents: 2999,
          description: 'omg tis shirt is off the chain!',
          featured: true
        }),
        knex('products').insert({
          id: 6,
          user_id: 3,
          image: '',
          name: 't-shirt number 6',
          price_cents: 2999,
          description: 'omg this shirt is off the chain!',
          featured: true
        }),
        knex('products').insert({
          id: 7,
          user_id: 1,
          image: '',
          name: 't-shirt numbewRase',
          price_cents: 2999,
          description: 'omg this shirt is off the chain!',
          featured: true
        })

      ]);
     });
};
