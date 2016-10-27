exports.seed = function(knex, Promise) {
  return Promise.all([
    knex('products').insert({
      id: 1,
      user_id: 1,
      image: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Chess_edt45.svg',
      name: 't-shirt number one',
      price_cents: 2999,
      description: 'omg this shirt is off the hook!',
      featured: true
    }),
    knex('products').insert({
      id: 2,
      user_id: 2,
      image: 'https://upload.wikimedia.org/wikipedia/commons/4/43/4-elements-2016071843.svg',
      name: 'ESC-001',
      price_cents: 6660,
      description: 'lorem ipsum dolor sit amet tris nore viaco papa bless',
      featured: true
    }),
    knex('products').insert({
      id: 3,
      user_id: 3,
      image: 'https://upload.wikimedia.org/wikipedia/commons/8/81/Weather-small-fog-night.svg',
      name: 't-shirt number three',
      price_cents: 2999,
      description: 'omg this shirt is off the chain!',
      featured: true
    }),
    knex('products').insert({
      id: 4,
      user_id: 3,
      image: 'https://upload.wikimedia.org/wikipedia/commons/a/a8/Zebrano_Nevit.svg',
      name: 't-shirt number four',
      price_cents: 2999,
      description: 'omg this shirt is off the asdfkh!',
      featured: true
    }),
    knex('products').insert({
      id: 5,
      user_id: 1,
      image: 'https://upload.wikimedia.org/wikipedia/commons/2/28/Octicons-gist-secret.svg',
      name: 't-shirt number five',
      price_cents: 2999,
      description: 'omg tis shirt is off the chain!',
      featured: true
    }),
    knex('products').insert({
      id: 6,
      user_id: 3,
      image: 'https://upload.wikimedia.org/wikipedia/commons/4/4f/Agent_Picol_icon.svg',
      name: 't-shirt number 6',
      price_cents: 2999,
      description: 'omg this shirt is off the chain!',
      featured: true
    }),
    knex('products').insert({
      id: 7,
      user_id: 1,
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Inkscape_icons_object_tweak_attract.svg/200px-Inkscape_icons_object_tweak_attract.svg.png',
      name: 't-shirt numbewRase',
      price_cents: 2999,
      description: 'omg this shirt is off the chain!',
      featured: true
    }),
    knex('products').insert({
      id: 8,
      user_id: 4,
      image: 'https://upload.wikimedia.org/wikipedia/commons/2/25/Process-killed.svg',
      name: 't-shirt numbewRase',
      price_cents: 2999,
      description: 'omg this shirt is off the chain!',
      featured: true
    })
  ]);
};
