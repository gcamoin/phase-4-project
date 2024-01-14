class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :content, :restaurant_id

  has_one :user
  has_one :restaurant

end
