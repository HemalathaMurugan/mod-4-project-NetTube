class UsersController < ApplicationController
    def index
        render json: User.all
    end

    def show
        render json: User.find(params[:id])
    end

    def create
        user = User.create(user_params)
        render json: user
    end

    def update
        user = User.find(params[:id])
        user.update(user_params)
        user.save
        render json: user
    end

    def destroy
        user = User.find(params[:id])
        unless user.nil?
            user.destroy
            render json: user
        else
            render json: { error: "No user found!" }, status: 404
        end
    end

    private
    def user_params
        params.require(:user).permit(:user_name, :password_digest)
    end
end
