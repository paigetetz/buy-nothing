class User < ApplicationRecord
  has_many :listings
  has_many :comments
  has_many :listings, through: :comments
  has_many :events
end
