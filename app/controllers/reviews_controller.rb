class ReviewsController < ApplicationController

    def index
        reviews = Review.all
        render json: reviews
    end

    def show
        reviews = Review.all
        render json: reviews
        
    end

    def create 
        review = @current_user.reviews.create(review_params)
        if review.valid?
            render json: review, status: :created
        else
            render json: {errors: review.errors.full_messages}, status: :unprocessable_entity
        end
    end

    private

    def review_params
        params.permit(:content, :restaurant_id)
    end
end
