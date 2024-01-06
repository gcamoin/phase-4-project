class Review < ApplicationRecord
    belongs_to :restaurant
    belongs_to :user

    validates :content, length:{maximum: 200}
end
