Product.create!([
  {name: 'Triple Blade Razor', product_type: 'razor', price: 8, description: "Our original razor, the reason why we do what we do. If you don't need any bells and whistles, this is the one for you. Good for all skin types.", photo_url: 'https://res.cloudinary.com/radiscipio/image/upload/v1570224201/xclh9ntmy6esxjgvhbrb.png'},
  {name: 'Double Blade Razor', product_type: 'razor', price: 6, description: "If you want a razor that's a bit less flashy, but just as tough as the three blade, you've come to the right place. Two blades for less irritation on the skin. Clean finish. Good for sensitive skin.", photo_url: 'https://res.cloudinary.com/radiscipio/image/upload/v1570224716/nsbbvaw35x9fw44fnrjt.png'}
])
p "#{Product.count} products created!"