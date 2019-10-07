Product.create!([
  {name: 'Triple Blade Razor', product_type: 'razor', price: 8, description: "Our original razor, the reason why we do what we do. If you don't need any bells and whistles, this is the one for you. Good for all skin types.", photo_url: 'https://res.cloudinary.com/radiscipio/image/upload/v1570224201/xclh9ntmy6esxjgvhbrb.png'},
  {name: 'Double Blade Razor', product_type: 'razor', price: 6, description: "If you want a razor that's a bit less flashy, but just as tough as the three blade, you've come to the right place. Two blades for less irritation on the skin. Clean finish. Good for sensitive skin.", photo_url: 'https://res.cloudinary.com/radiscipio/image/upload/v1570224201/xclh9ntmy6esxjgvhbrb.png'},
  {name: 'The Excalibur', product_type: 'razor', price: 11, description: "A blade fit for a king. One of a kind, and made just for you. Good for all skin types.", photo_url: 'https://res.cloudinary.com/radiscipio/image/upload/v1570224201/xclh9ntmy6esxjgvhbrb.png'},
  {name: 'The 1945', product_type: 'razor', price: 9, description: "Pure steel, solid and strong, just like you. You know what you want out of a razor. Good for thicker, coarser hair", photo_url: 'https://res.cloudinary.com/radiscipio/image/upload/v1570224201/xclh9ntmy6esxjgvhbrb.png'},
  {name: 'Mach 50 Pure Blade', product_type: 'razor', price: 12, description: "We only make 50 of these a month. Not because of the difficulty, but because they're made over an active volcano", photo_url: 'https://res.cloudinary.com/radiscipio/image/upload/v1570224201/xclh9ntmy6esxjgvhbrb.png'},
  {name: "Peppermint Bliss", product_type: 'aftershave', price: 6, description: "Softly caressing your skin with the gentle kiss of peppermint, lavender, and love. Let the happiness wash over you with this aftershave", photo_url:"https://res.cloudinary.com/radiscipio/image/upload/v1570489598/kiyfxdlryl4tjg78m4h8.jpg"},
  {name: "X", product_type: 'aftershave', price: 6, description: "Feeling a bit naughty? Hints of leather, tobacco, and sandlewood has everyone wanting this aftershave. Don't go to heavy though, need to have them coming back for more", photo_url:"https://res.cloudinary.com/radiscipio/image/upload/v1570489598/kiyfxdlryl4tjg78m4h8.jpg"},
  {name: "The Lumberjack", product_type: 'aftershave', price: 6, description: "For the tree-chopping, log-slinging, axe-wielding badass. Leather, oak, cedarwood, and vanilla will embrace you like nature intended.", photo_url:"https://res.cloudinary.com/radiscipio/image/upload/v1570489598/kiyfxdlryl4tjg78m4h8.jpg"},
  {name: "The Original", product_type: 'aftershave', price: 6, description: "We mix evergreen, silver fir, and sandalwood to get the perfect blend of lingering scent, all in one bottle. Dapper, destinguished, and dangerous.", photo_url:"https://res.cloudinary.com/radiscipio/image/upload/v1570489598/kiyfxdlryl4tjg78m4h8.jpg"},
  {name: "", product_type: "bag", price: , description: "", photo_url:""},
  {name: "", product_type: "bag", price: , description: "", photo_url:""},
  {name: "", product_type: "bag", price: , description: "", photo_url:""},

])


p "#{Product.count} products created!"