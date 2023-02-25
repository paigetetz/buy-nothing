class CommentSerializer < ActiveModel::Serializer
  attributes :id, :commentary, :user_id, :listing_id
end
