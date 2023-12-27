class Review < ApplicationRecord
    belongs_to :restaraunt
    belongs_to :user
end
