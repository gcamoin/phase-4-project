class User < ApplicationRecord
    has_many :reviews
    has_many :restaurants, through: :reviews

    has_secure_password

    validates :user_name, uniqueness: true
    validates :password, length:{minimum: 5}

    
end
