class RestaurantsController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response


    def index
        restaurants = Restaurant.all
        render json: restaurants
    end

    def show
        restaurant = Restaurant.find_by(id: params[:id])
        if restaurant
            render json: restaurant
        else
            render json: { error: "Restaurant not found"}, status: :not_found
        end
    end

    def create 
        restaurant = Restaurant.create(name: params[:name], cuisine_type: params[:cuisine_type], rating: params[:rating], delivery: params[:delivery])
        render json: restaurant, status: :created
    end
end
