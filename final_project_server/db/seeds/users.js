exports.seed = function(knex, Promise) {
  return knex('users').del()
    .then(function () {
      return Promise.all([
        knex('users').insert({
          id: 1,
          first_name: 'Alice',
          last_name: 'Baxter',
          email: 'alicebaxter@gmail.com',
          password: '123',
          is_designer: 'true'
        }),
        knex('users').insert({
          id: 2,
          first_name: 'Eric',
          last_name: 'Tehbest',
          email: 'erictehbest@gmail.com',
          password: '123',
          is_designer: 'false'
      }),
        knex('users').insert({
          id: 3,
          first_name: 'Adam',
          last_name: 'R',
          email: 'adamr@gmail.com',
          password: '123',
          is_designer: 'true'
        })
      ]);
    });
};
