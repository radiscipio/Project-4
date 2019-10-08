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
    photo_url: 'https://res.cloudinary.com/radiscipio/image/upload/v1570224201/xclh9ntmy6esxjgvhbrb.png'
  },
  {
    name: 'The 1955', 
    product_type: 'razor', 
    price: 9, 
    description: "Pure steel, solid and strong, just like you. You know what you want out of a razor. Good for thicker, coarser hair.", 
    photo_url: 'https://res.cloudinary.com/radiscipio/image/upload/v1570224201/xclh9ntmy6esxjgvhbrb.png'
  },
  {
    name: 'Mach 50 Pure Blade', 
    product_type: 'razor', 
    price: 12, 
    description: "We only make 50 of these a month. Not because of the difficulty, but because they're made over an active volcano.", 
    photo_url: 'https://res.cloudinary.com/radiscipio/image/upload/v1570224201/xclh9ntmy6esxjgvhbrb.png'
  },
  {
    name: 'Extra Razor Blades', 
    product_type: 'razor', 
    price: 4, 
    description: "'If I needed to shave, I would only use these blades' - Our founders Sphinx cat, probably.", 
    photo_url: 'https://res.cloudinary.com/radiscipio/image/upload/v1570544075/ciuyernfc98ap6zcgrpi.jpg'
  },
  {
    name: "Peppermint Bliss", 
    product_type: 'after_shave', 
    price: 6, 
    description: "Softly caressing your skin with the gentle kiss of peppermint, lavender, and love. Let the happiness wash over you with this aftershave.", 
    photo_url:"https://res.cloudinary.com/radiscipio/image/upload/v1570489598/kiyfxdlryl4tjg78m4h8.jpg"
  },
  {
    name: "X", 
    product_type: 'after_shave', 
    price: 7, 
    description: "Feeling a bit naughty? Hints of leather, tobacco, and sandlewood has everyone wanting this aftershave. Don't go to heavy though, need to have them coming back for more.", 
    photo_url:"https://res.cloudinary.com/radiscipio/image/upload/v1570489598/kiyfxdlryl4tjg78m4h8.jpg"
  },
  {
    name: "The Lumberjack", 
    product_type: 'after_shave', 
    price: 7, 
    description: "For the tree-chopping, log-slinging, axe-wielding badass. Leather, oak, cedarwood, and vanilla will embrace you like nature intended.", 
    photo_url:"https://res.cloudinary.com/radiscipio/image/upload/v1570489598/kiyfxdlryl4tjg78m4h8.jpg"},
  {
    name: "The Original", 
    product_type: 'after_shave', 
    price: 7, 
    description: "We mix evergreen, silver fir, and sandalwood to get the perfect blend of lingering scent, all in one bottle. Dapper, destinguished, and dangerous.", 
    photo_url:"https://res.cloudinary.com/radiscipio/image/upload/v1570489598/kiyfxdlryl4tjg78m4h8.jpg"
  },
  {
    name: "Shampoo", 
    product_type: "shower_product", 
    price: 7, 
    description: "What do coconut, shea butter, and aloe verra have in common? Our formula. It helps prevent dandruff and dry scalps, all while making you smell nice.", 
    photo_url:"https://res.cloudinary.com/radiscipio/image/upload/v1570541263/hwvylj8b5s7w43zbb4yg.jpg"
  },
  {
    name: "Conditioner", 
    product_type: "shower_product", 
    price: 7, 
    description: "Batman and Robin, Han and Chewy, Superman and... scratch that last one. What we mean is, this is the perfect match for our shampoo.", 
    photo_url:"https://res.cloudinary.com/radiscipio/image/upload/v1570541263/hwvylj8b5s7w43zbb4yg.jpg"
  },
  {
    name: "Body Wash", 
    product_type: "shower_product", 
    price: 5, 
    description: "Once there was a baby bar of soap. It said to itself, 'When I grow up, I want to be body wash!' So we made that dream come true. We added a little aloe verra and oatmeal to make your skin feel great.", 
    photo_url:"https://res.cloudinary.com/radiscipio/image/upload/v1570541263/hwvylj8b5s7w43zbb4yg.jpg"
  } 
])

p "#{Product.count} products created!"