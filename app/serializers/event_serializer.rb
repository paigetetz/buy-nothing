class EventSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :location, :time
end
