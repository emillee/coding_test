require 'securerandom'

categories = [
  'apparel',
  'electronics',
  'groceries',
  'office supplies',
  'sporting goods'
]

1000.times do |n|
  Product.create(
    name: "product-" + "#{n}",
    sku: SecureRandom.hex(6),
    category: categories[rand(0..categories.count-1)],
  )
end