class ListingSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :location, :listing_username, :listing_profile_pic

  def listing_username
    self.object.listing_username
  end

  def listing_profile_pic
    self.object.listing_profile_pic
  end
end
