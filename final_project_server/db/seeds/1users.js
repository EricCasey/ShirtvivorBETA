exports.seed = function(knex, Promise) {
  return Promise.all([
    knex('users').insert({
      id: 1,
      first_name: 'Alice',
      last_name: 'Baxter',
      username: 'Acme Studios',
      email: 'alicebaxter@gmail.com',
      password: '123',
      is_designer: false,
      is_admin: true,
      user_votes: 3
    }),
    knex('users').insert({
      id: 2,
      first_name: 'Eric',
      last_name: 'Casey',
      username: 'Casey_works',
      email: 'ericcasey509@gmail.com',
      password: '123',
      is_designer: false,
      is_admin: true,
      image_submission: 'http://i.imgur.com/HpStImm.jpg',
      user_votes: 3
    }),
    knex('users').insert({
      id: 3,
      first_name: 'Adam',
      last_name: 'R',
      username: 'APC',
      email: 'adamr@gmail.com',
      password: '123',
      is_designer: false,
      is_admin: true,
      user_votes: 3
    })
    // knex('users').insert({
    //   id: 4,
    //   first_name: 'marshawn',
    //   last_name: 'not a designer',
    //   username: 'I_AM_NOT_A_DESIGNER',
    //   email: 'best@gmail.com',
    //   password: '123',
    //   is_designer: true,
    //   is_admin: true,
    //   image_submission: 'http://i.imgur.com/HpStImm.jpg',
    //   user_votes: 3
    // }),
    // knex('users').insert({
    //   id: 5,
    //   first_name: 'Eric',
    //   last_name: 'Tehworst',
    //   username: 'Chanel',
    //   email: 'erichbest@gmail.com',
    //   password: '123',
    //   is_designer: true,
    //   is_admin: true,
    //   user_votes: 3
    // }),
    // knex('users').insert({
    //   id: 6,
    //   first_name: 'Eric',
    //   last_name: 'Tehbaddest',
    //   username: 'Common Projects',
    //   email: 'eriasdfst@gmail.com',
    //   password: '123',
    //   is_designer: true,
    //   is_admin: true,
    //   user_votes: 3
    // }),
    // knex('users').insert({
    //   id: 7,
    //   first_name: 'Eric',
    //   last_name: 'Tehbest',
    //   username: 'Fendi',
    //   email: 'erictehbest@gmail.com',
    //   password: '123',
    //   is_designer: false,
    //   is_admin: true,
    //   user_votes: 3
    // }),
    // knex('users').insert({
    //   id: 8,
    //   first_name: 'Eric',
    //   last_name: 'Tehbest',
    //   username: 'Givency',
    //   email: 'ericts@gmail.com',
    //   password: '123',
    //   is_designer: false,
    //   is_admin: true,
    //   user_votes: 3
    // }),
    // knex('users').insert({
    //   id: 9,
    //   first_name: 'Eric',
    //   last_name: 'Tehbest',
    //   username: 'Gucci',
    //   email: 'eric321@gmail.com',
    //   password: '123',
    //   is_designer: false,
    //   is_admin: true,
    //   user_votes: 3
    // }),
    // knex('users').insert({
    //   id: 10,
    //   first_name: 'Eric',
    //   last_name: 'Tehbest',
    //   username: 'Versace',
    //   email: 'eric123@gmail.com',
    //   password: '123',
    //   is_designer: false,
    //   is_admin: true,
    //   user_votes: 3
    // }),
    // knex('users').insert({
    //   id: 11,
    //   first_name: 'testerino',
    //   last_name: 'Tehbest',
    //   username: 'Stone Island',
    //   email: 'testerino@gmail.com',
    //   password: '123',
    //   is_designer: false,
    //   is_admin: true,
    //   user_votes: 3
    // }),
    // knex('users').insert({
    //   id: 12,
    //   first_name: 'tester',
    //   last_name: 'Testing',
    //   username: 'i love ugly',
    //   email: 'test321@gmail.com',
    //   password: '123',
    //   is_designer: false,
    //   is_admin: true,
    //   user_votes: 3
    // })
  ]);
};
