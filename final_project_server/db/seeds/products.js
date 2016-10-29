exports.seed = function(knex, Promise) {
  return Promise.all([
    knex('products').insert({
      id: 1,
      user_id: 1,
      image: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Chess_edt45.svg',
      name: 't-shirt one',
      price_cents: 2999,
      description: 'omg this shirt is off the hook!',
      featured: false,
      votes: 300,
      for_sale: true

    }),
    knex('products').insert({
      id: 2,
      user_id: 2,
      image: 'https://upload.wikimedia.org/wikipedia/commons/4/43/4-elements-2016071843.svg',
      name: 't-shirt two',
      price_cents: 6660,
      description: 'shirt of the year',
      featured: false,
      votes: 300,
      for_sale: true
    }),
    knex('products').insert({
      id: 3,
      user_id: 3,
      image: 'https://upload.wikimedia.org/wikipedia/commons/8/81/Weather-small-fog-night.svg',
      name: 't-shirt three',
      price_cents: 2999,
      description: 'omg this shirt is off the chain!',
      featured: false,
      votes: 300,
      for_sale: true
    }),
    knex('products').insert({
      id: 4,
      user_id: 3,
      image: 'http://publicdomainvectors.org/tn_img/ryanlerch_Cormorants.png',
      name: 't-shirt four',
      price_cents: 2999,
      description: 'omg this shirt is off the asdfkh!',
      featured: false,
      votes: 300,
      for_sale: true
    }),
    knex('products').insert({
      id: 5,
      user_id: 1,
      image: 'https://upload.wikimedia.org/wikipedia/commons/2/28/Octicons-gist-secret.svg',
      name: 't-shirt five',
      price_cents: 2999,
      description: 'omg tis shirt is off the chain!',
      featured: false,
      votes: 300,
      for_sale: true
    }),
    knex('products').insert({
      id: 6,
      user_id: 4,
      image: 'https://upload.wikimedia.org/wikipedia/commons/4/4f/Agent_Picol_icon.svg',
      name: 't-shirt six',
      price_cents: 2999,
      description: 'shirt tingz',
      featured: false,
      votes: 300,
      for_sale: true
    }),
    knex('products').insert({
      id: 7,
      user_id: 5,
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Inkscape_icons_object_tweak_attract.svg/200px-Inkscape_icons_object_tweak_attract.svg.png',
      name: 't-shirt seven',
      price_cents: 2999,
      description: 'bape stuff',
      featured: false
    }),
    knex('products').insert({
      id: 8,
      user_id: 6,
      image: 'https://upload.wikimedia.org/wikipedia/commons/2/25/Process-killed.svg',
      name: 't-shirt eight',
      price_cents: 2999,
      description: 'nice shirt',
      featured: false,
      votes: 300,
      for_sale: true
    }),
    knex('products').insert({
      id: 9,
      user_id: 6,
      image: 'https://upload.wikimedia.org/wikipedia/commons/3/32/Calf_drawing_-_Joachim_Lutz.svg',
      name: 't-shirt nine',
      price_cents: 2999,
      description: 'omg this shirt is dank',
      featured: false,
      votes: 300,
      for_sale: true
    }),
    knex('products').insert({
      id: 10,
      user_id: 5,
      image: 'https://upload.wikimedia.org/wikipedia/commons/8/8b/Copyleft.svg',
      name: 't-shirt ten',
      price_cents: 2999,
      description: 'omg this shirt is lit',
      featured: false,
      votes: 300,
      for_sale: true
    }),
    knex('products').insert({
      id: 11,
      user_id: 4,
      image: 'https://upload.wikimedia.org/wikipedia/commons/6/60/Gazania_rigens_var._rigens_vector_icon.svg',
      name: 't-shirt numbewRase',
      price_cents: 2999,
      description: 'bless up',
      featured: false,
      votes: 300,
      for_sale: true
    }),
    knex('products').insert({
      id: 12,
      user_id: 7,
      image: 'http://publicdomainvectors.org/tn_img/cybergedeon_AL_throwing_a_stone.png',
      name: 't-shirt numbewRase',
      price_cents: 2999,
      description: 'vape naysh',
      featured: false,
      votes: 0,
      for_sale: false
    }),
    knex('products').insert({
      id: 13,
      user_id: 8,
      image: 'https://upload.wikimedia.org/wikipedia/commons/9/9b/Skull_and_crossbones_vector.svg',
      name: 't-shirt numbewRase',
      price_cents: 2999,
      description: 'papa bless',
      featured: false,
      votes: 0,
      for_sale: false
    }),
    knex('products').insert({
      id: 14,
      user_id: 9,
      image: 'https://upload.wikimedia.org/wikipedia/commons/f/f5/Eyes_lumen_design_studio_01.svg',
      name: 't-shirt numbewRase',
      price_cents: 2999,
      description: 'testing tingz',
      featured: false,
      votes: 0,
      for_sale: false
    }),
    knex('products').insert({
      id: 15,
      user_id: 10,
      image: 'https://upload.wikimedia.org/wikipedia/commons/0/02/Dragon_chinois_a_ecailles.svg',
      name: 't-shirt numbewRase',
      price_cents: 2999,
      description: 'making shirts happen',
      featured: false,
      votes: 0,
      for_sale: false
    }),
    knex('products').insert({
      id: 16,
      user_id: 11,
      image: 'http://publicdomainvectors.org/tn_img/Monster4.png',
      name: 't-shirt numbewRase',
      price_cents: 2999,
      description: 'testing tingzzz',
      featured: false,
      votes: 0,
      for_sale: false
    }),
    knex('products').insert({
      id: 17,
      user_id: 12,
      image: 'http://publicdomainvectors.org/tn_img/ossidiana-monster.png',
      name: 't-shirt numbewRase',
      price_cents: 2999,
      description: 'testing tingzzzzzz',
      featured: false,
      votes: 0,
      for_sale: false
    })
  ]);
};
