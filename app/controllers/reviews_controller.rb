class ReviewsController < ApplicationController

    def index
        reviews = Review.all
        render json: reviews
    end

    def show
        review = Review.find_by(id: params[:id])
        if review
            render json: review
        else
            render json: { error: "Review not found" }, status: :not_found
        end
    end

    def create 
        review = Review.create(content: params[:content])
        if review.valid?
            render json: review, status: :created
        else
            render json: {errors: review.errors.full_messages}, status: :unprocessable_entity
        end
    end
end
