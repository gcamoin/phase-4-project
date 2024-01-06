class RestaurantsController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response


    def index
        restaurants = Restaurant.all
        render json: restaurants, include: ['reviews', 'reviews.user']
    end

    def show
        restaurant = Restaurant.find_by(id: params[:id])
        if restaurant
            render json: restaurant, include: ['reviews', 'reviews.user']
        else
            render json: { error: "Restaurant not found" }, status: :not_found
        end
    end

    def create 
        restaurant = Restaurant.create(name: params[:name], cuisine_type: params[:cuisine_type], image: params[:image])
        render json: restaurant, status: :created
    end
end
