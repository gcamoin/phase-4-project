class UserSerializer < ActiveModel::Serializer
  attributes :id, :user_name

  has_many :reviews
  has_many :restaurants
end
