class EventSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :location, :time, :event_username, :event_profile_pic

  def event_username
    self.object.event_username
  end

  def event_profile_pic
    self.object.event_profile_pic
  end
end
