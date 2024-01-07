class UserSerializer < ActiveModel::Serializer
  attributes :id, :user_name, :password_digest

  has_many :reviews
  has_many :restaurants
end
