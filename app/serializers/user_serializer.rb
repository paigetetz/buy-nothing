class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :email, :profile_pic, :bio
end
