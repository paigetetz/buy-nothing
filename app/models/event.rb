class Event < ApplicationRecord
  belongs_to :user

  def event_username
    self.event.username
  end

  def event_profile_pic
    self.event.profile_pic
  end

end
