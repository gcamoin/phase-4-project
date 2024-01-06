class UsersController < ApplicationController

    def index 
        users = User.all
        render json: users
    end

    def show
        user = User.find_by(id: session[:user_id])
        if user
          render json: user
        else
          render json: { error: "Not authorized" }, status: :unauthorized
        end
      end

    def create 
        user = User.create(user_name: params[:user_name])
        if user.valid?
        render json: user, status: :created
        else
            render json: {errors: user.errors}, status: :unprocessable_entity
    end
end
