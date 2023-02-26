class Listing < ApplicationRecord
  has_many :comments
  belongs_to :user

  def listing_username
    self.user.username
  end

  def listing_profile_pic
    self.user.profile_pic
  end
end
