exports.seed = function(knex, Promise) {
  return Promise.all([
    knex('products').insert({
      user_id: 1,
      image: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Chess_edt45.svg',
      name: 'Elephanti',
      price_cents: 3999,
      description: 'omg this shirt is off the hook!',
      featured: false,
      votes: 300,
      for_sale: true

    }),
    knex('products').insert({
      user_id: 2,
      image: 'https://upload.wikimedia.org/wikipedia/commons/4/43/4-elements-2016071843.svg',
      name: 'Compass Alchemy',
      price_cents: 3999,
      description: 'shirt of the year',
      featured: false,
      votes: 300,
      for_sale: true
    }),
    knex('products').insert({
      user_id: 3,
      image: 'https://upload.wikimedia.org/wikipedia/commons/8/81/Weather-small-fog-night.svg',
      name: 'Moon Festival',
      price_cents: 3999,
      description: 'omg this shirt is off the chain!',
      featured: false,
      votes: 300,
      for_sale: true
    }),
    knex('products').insert({
      user_id: 3,
      image: 'http://publicdomainvectors.org/tn_img/ryanlerch_Cormorants.png',
      name: 'Ostriches.af',
      price_cents: 3999,
      description: 'omg this shirt is off the asdfkh!',
      featured: false,
      votes: 300,
      for_sale: true
    }),
    knex('products').insert({
      user_id: 1,
      image: 'https://upload.wikimedia.org/wikipedia/commons/2/28/Octicons-gist-secret.svg',
      name: 'ISPY',
      price_cents: 3999,
      description: 'omg this shirt! tis off the chain!',
      featured: false,
      votes: 300,
      for_sale: true
    }),
    knex('products').insert({
      user_id: 4,
      image: 'https://upload.wikimedia.org/wikipedia/commons/4/4f/Agent_Picol_icon.svg',
      name: 'EyeDOT',
      price_cents: 3999,
      description: 'shirt tingz',
      featured: false,
      votes: 300,
      for_sale: true
    }),
    knex('products').insert({
      user_id: 5,
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Inkscape_icons_object_tweak_attract.svg/200px-Inkscape_icons_object_tweak_attract.svg.png',
      name: 't-shirt seven',
      price_cents: 3999,
      description: 'bape stuff',
      featured: false
    }),
    knex('products').insert({
      user_id: 6,
      image: 'https://upload.wikimedia.org/wikipedia/commons/2/25/Process-killed.svg',
      name: 't-shirt eight',
      price_cents: 3999,
      description: 'nice shirt',
      featured: false,
      votes: 300,
      for_sale: true
    }),
    knex('products').insert({
      user_id: 6,
      image: 'https://upload.wikimedia.org/wikipedia/commons/3/32/Calf_drawing_-_Joachim_Lutz.svg',
      name: 't-shirt nine',
      price_cents: 3999,
      description: 'omg this shirt is dank',
      featured: false,
      votes: 300,
      for_sale: true
    }),
    knex('products').insert({
      user_id: 5,
      image: 'https://upload.wikimedia.org/wikipedia/commons/8/8b/Copyleft.svg',
      name: 'Copy-what?',
      price_cents: 3999,
      description: 'omg this shirt is lit',
      featured: false,
      votes: 300,
      for_sale: true
    }),
    knex('products').insert({
      user_id: 4,
      image: 'https://upload.wikimedia.org/wikipedia/commons/6/60/Gazania_rigens_var._rigens_vector_icon.svg',
      name: 't-shirt ten',
      price_cents: 3999,
      description: 'bless up',
      featured: false,
      votes: 300,
      for_sale: true
    }),
    knex('products').insert({
      user_id: 7,
      image: 'http://publicdomainvectors.org/tn_img/cybergedeon_AL_throwing_a_stone.png',
      name: 'ThrowMan',
      price_cents: 3999,
      description: 'vape naysh',
      featured: false,
      votes: 0,
      for_sale: false
    }),
    knex('products').insert({
      user_id: 8,
      image: 'https://upload.wikimedia.org/wikipedia/commons/9/9b/Skull_and_crossbones_vector.svg',
      name: 'Jolly Roger',
      price_cents: 3999,
      description: 'papa bless',
      featured: false,
      votes: 0,
      for_sale: false
    }),
    knex('products').insert({
      user_id: 9,
      image: 'https://upload.wikimedia.org/wikipedia/commons/f/f5/Eyes_lumen_design_studio_01.svg',
      name: 'Snake Eyes',
      price_cents: 3999,
      description: 'testing tingz',
      featured: false,
      votes: 0,
      for_sale: false
    }),
    knex('products').insert({
      user_id: 10,
      image: 'https://upload.wikimedia.org/wikipedia/commons/0/02/Dragon_chinois_a_ecailles.svg',
      name: 'Mulan.af',
      price_cents: 3999,
      description: 'making shirts happen',
      featured: false,
      votes: 298,
      for_sale: false
    }),
    knex('products').insert({
      user_id: 11,
      image: 'http://publicdomainvectors.org/tn_img/Monster4.png',
      name: 'KidsDrawing',
      price_cents: 3999,
      description: 'testing tingzzz',
      featured: false,
      votes: 0,
      for_sale: false
    }),
    knex('products').insert({
      user_id: 12,
      image: 'http://publicdomainvectors.org/tn_img/ossidiana-monster.png',
      name: 'GrumpBeast',
      price_cents: 3999,
      description: 'testing tingzzzzzz',
      featured: false,
      votes: 0,
      for_sale: false
    })
  ]);
};
