class Event < ApplicationRecord
  belongs_to :user

  def event_username
    self.user.username
  end

  def event_profile_pic
    self.user.profile_pic
  end

end
