class Review < ApplicationRecord
    belongs_to :restaurant
    belongs_to :user

    validates :content, presence: true
    validates :content, length:{maximum: 200}
    validates :user_id, uniqueness: {
        scope: [:restaurant_id]
    }
    
end
