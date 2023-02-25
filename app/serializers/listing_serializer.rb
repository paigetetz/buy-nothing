class ListingSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :location
end
