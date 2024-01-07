class User < ApplicationRecord
    has_many :reviews
    has_many :restaurants, through: :reviews

    validates :user_name, uniqueness: true
    validates :password_digest, length:{minimum: 5}
end
