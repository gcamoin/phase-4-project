class RestaurantSerializer < ActiveModel::Serializer
  attributes :id, :name, :cuisine_type, :rating, :image

  has_many :reviews
  has_many :users
 


end
