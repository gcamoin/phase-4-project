class UsersController < ApplicationController
  # skip_before_action :authorize, only: :create
  
   def index 
        users = User.all
        render json: users
    end

    def show
      render json: @current_user
        # user = User.find_by(id: session[:user_id])
        # if user
        #   render json: user
        # else
        #   render json: { error: "Not authorized" }, status: :unauthorized
        # end
      end

    def create 
        user = User.create(user_name: params[:username], password_digest: params[:password])
        session[:user_id] = user.id
        if user.valid?
        render json: user, status: :created
        else
            render json: {errors: user.errors}, status: :unprocessable_entity
        end
    end
end
