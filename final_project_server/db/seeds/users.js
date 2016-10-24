exports.seed = function(knex, Promise) {
  return knex('users').del()
    .then(function () {
      return Promise.all([
        knex('users').insert({
          id: 1,
          first_name: 'Alice',
          last_name: 'Baxter',
          username: 'Acne Studios',
          email: 'alicebaxter@gmail.com',
          password: '123',
          is_designer: true,
          is_admin: true

        }),
        knex('users').insert({
          id: 2,
          first_name: 'Eric',
          last_name: 'Tehbest',
          username: 'Balenciaga',
          email: 'erictehbest@gmail.com',
          password: '123',
          is_designer: true,
          is_admin: true
      }),
        knex('users').insert({
          id: 3,
          first_name: 'Adam',
          last_name: 'R',
          username: 'APC',
          email: 'adamr@gmail.com',
          password: '123',
          is_designer: true,
          is_admin: true
        }),
        knex('users').insert({
          id: 4,
          first_name: 'Eric',
          last_name: 'Tehbest',
          username: 'IAMNOTADESIGNERWTF',
          email: 'erictashdfiuhehbest@gmail.com',
          password: '123',
          is_designer: false,
          is_admin: true
      }),
      knex('users').insert({
        id: 5,
        first_name: 'Eric',
        last_name: 'Tehbest',
        username: 'Chanel',
        email: 'ericteasdfasdfhbest@gmail.com',
        password: '123',
        is_designer: true,
        is_admin: true
    }),
    knex('users').insert({
      id: 6,
      first_name: 'Eric',
      last_name: 'Tehbest',
      username: 'Common Projects',
      email: 'eriasdfst@gmail.com',
      password: '123',
      is_designer: true,
      is_admin: true
  }),
  knex('users').insert({
    id: 7,
    first_name: 'Eric',
    last_name: 'Tehbest',
    username: 'Fendi',
    email: 'erictehbest@gmail.com',
    password: '123',
    is_designer: true,
    is_admin: true
}),
knex('users').insert({
  id: 8,
  first_name: 'Eric',
  last_name: 'Tehbest',
  username: 'Givency',
  email: 'erictsdfasdfehbest@gmail.com',
  password: '123',
  is_designer: true,
  is_admin: true
}),
knex('users').insert({
  id: 9,
  first_name: 'Eric',
  last_name: 'Tehbest',
  username: 'Gucci',
  email: 'erictehaseraserbest@gmail.com',
  password: '123',
  is_designer: true,
  is_admin: true
}),
knex('users').insert({
  id: 10,
  first_name: 'Eric',
  last_name: 'Tehbest',
  username: 'Versace',
  email: 'erictehbiuhasdiuhest@gmail.com',
  password: '123',
  is_designer: true,
  is_admin: true
})
    
      ]);
    });
};
