class RestaurantSerializer < ActiveModel::Serializer
  attributes :id, :name, :cuisine_type, :rating, :image
end
