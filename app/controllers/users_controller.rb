class UsersController < ApplicationController
  skip_before_action :authorize, only: :create
  
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
        user = User.create(user_params)
        if user.valid?
        session[:user_id] = user.id
        render json: user, status: :created
        else
            render json: {errors: ["Invalid username or password"]}, status: :unprocessable_entity
        end
        
    end

    private

    def authorize
      return render json: { error: "Not authorized" }, status: :unauthorized unless session.include? :user_id
    end

    def user_params
      params.permit(:user_name, :password, :password_confirmation)
    end
end
