class Restaurant < ApplicationRecord
    has_many :reviews
    has_many :users, through: :reviews

    validates :name, presence: true
    validates :cuisine_type, presence: true
    validates :image, presence: true
    
end
