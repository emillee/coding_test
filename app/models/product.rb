class Product < ActiveRecord::Base

  CATEGORIES = [
    'apparel',
    'electronics',
    'groceries',
    'office supplies',
    'sporting goods'
  ]

  validates :name, presence: true
  validates :sku, presence: true
  validates_inclusion_of :category, in: CATEGORIES
end
