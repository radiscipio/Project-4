Product.create!([
  {
    name: 'Triple Blade Razor', 
    product_type: 'razor',
    price: 10, 
    description: "Our original razor, the reason why we do what we do. If you don't need any bells and whistles, this is the one for you. Good for all skin types.", 
    photo_url: 'https://res.cloudinary.com/radiscipio/image/upload/v1570224201/xclh9ntmy6esxjgvhbrb.png'
  },
  {
    name: 'Double Blade Razor', 
    product_type: 'razor', 
    price: 6, 
    description: "If you want a razor that's a bit less flashy, but just as tough as the three blade, you've come to the right place. Two blades for less irritation on the skin. Clean finish. Good for sensitive skin.", 
    photo_url: 'https://res.cloudinary.com/radiscipio/image/upload/v1570224201/xclh9ntmy6esxjgvhbrb.png'
  },
  {
    name: 'Excalibur', 
    product_type: 'razor', 
    price: 11, 
    description: "A blade fit for a king. One of a kind, and made just for you. Good for all skin types.", 
    photo_url: 'https://res.cloudinary.com/radiscipio/image/upload/v1570557236/ycvff3yqj5sgmvutuwxd.jpg'
  },
  {
    name: 'The 1955', 
    product_type: 'razor', 
    price: 9, 
    description: "Pure steel, solid and strong, just like you. You know what you want out of a razor. Good for thicker, coarser hair.", 
    photo_url: 'https://res.cloudinary.com/radiscipio/image/upload/v1570557816/f6i4nbqqmbwhpvi533eh.jpg'
  },
  {
    name: 'Mach 50 ', 
    product_type: 'razor', 
    price: 12, 
    description: "We only make 50 of these a month. Not because of the difficulty, but because they're made over an active volcano.", 
    photo_url: 'https://res.cloudinary.com/radiscipio/image/upload/v1570558006/q5yfdvdx65nfpsvvki3n.jpg'
  },
  {
    name: 'Extra Razor Blades (5)', 
    product_type: 'razor', 
    price: 12, 
    description: "''If I needed to shave, I would only use these blades'' - Our founders Sphinx cat, probably.", 
    photo_url: 'https://res.cloudinary.com/radiscipio/image/upload/c_scale,h_600,w_600/v1570562518/hcpe2hd0dqgki9oykdtc.jpg'
  },
  {
    name: "Peppermint Bliss", 
    product_type: 'after_shave', 
    price: 6, 
    description: "Softly caressing your skin with the gentle kiss of peppermint, lavender, and love. Let the happiness wash over you with this aftershave.", 
    photo_url:"https://res.cloudinary.com/radiscipio/image/upload/v1570557048/jdh0cqs6aw47ipz3salt.jpg"
  },
  {
    name: "X", 
    product_type: 'after_shave', 
    price: 7, 
    description: "Feeling a bit naughty? Hints of leather, tobacco, and sandalwood has everyone wanting this aftershave. Don't go too heavy though, need to have them coming back for more.", 
    photo_url:"https://res.cloudinary.com/radiscipio/image/upload/v1570557048/jdh0cqs6aw47ipz3salt.jpg"
  },
  {
    name: "The Lumberjack", 
    product_type: 'after_shave', 
    price: 7, 
    description: "For the tree-chopping, log-slinging, axe-wielding badass. Leather, oak, cedarwood, and vanilla will embrace you like nature intended.", 
    photo_url:"https://res.cloudinary.com/radiscipio/image/upload/v1570557048/jdh0cqs6aw47ipz3salt.jpg"},
  {
    name: "The Original", 
    product_type: 'after_shave', 
    price: 7, 
    description: "We mix evergreen, silver fir, and sandalwood to get the perfect blend of lingering scent, all in one bottle. Dapper, distinguished, and dangerous.", 
    photo_url:"https://res.cloudinary.com/radiscipio/image/upload/v1570557048/jdh0cqs6aw47ipz3salt.jpg"
  },
  {
    name: "Shampoo", 
    product_type: "shower_product", 
    price: 7, 
    description: "What do coconut, shea butter, and aloe vera have in common? Our formula. It helps prevent dandruff and dry scalps, all while making you smell like you just walked out of a tropical fantasy.", 
    photo_url:"https://res.cloudinary.com/radiscipio/image/upload/v1570556429/hubspp0wryexvgp7nzhr.jpg"
  },
  {
    name: "Conditioner", 
    product_type: "shower_product", 
    price: 7, 
    description: "Batman and Robin, Han and Chewy, Superman and... scratch that last one. What we mean is, this is the perfect match for our shampoo.", 
    photo_url:"https://res.cloudinary.com/radiscipio/image/upload/v1570556430/vn5wzujq5tfrnur84tzn.jpg"
  },
  {
    name: "Body Wash", 
    product_type: "shower_product", 
    price: 5, 
    description: "Once there was a baby bar of soap. It said to itself, 'When I grow up, I want to be body wash!' So we made that dream come true. We added a little aloe vera and oatmeal to make your skin feel great.", 
    photo_url:"https://res.cloudinary.com/radiscipio/image/upload/v1570556670/prheagupfihjj9embqyd.jpg"
  } 
])

p "#{Product.count} products created!"