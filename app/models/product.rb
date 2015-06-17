class Product < ActiveRecord::Base

  CATEGORIES = [
    'apparel',
    'electronics',
    'groceries',
    'office supplies',
    'sporting goods'
  ]

  # can make this dynamic client-side as well and send in as query params, 
  # hardcoding for now -- specs aren't asking for dynamic / client-side limit
  LIMIT = 20

  validates :name, presence: true
  validates :sku, presence: true
  validates_inclusion_of :category, in: CATEGORIES

end
