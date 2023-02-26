class UsersController < ApplicationController
  skip_before_action :authorize, :only => [:create, :show]

  def create 
    user = User.create(user_params)
      if user.valid?
      session[:user_id] = user.id
      render json: user
      else
        render json: {error: user.errors.full_messages}, status: :unprocessable_entity
  end
  def show
    user = User.find_by(id: session[:user_id])
      if user
        render json: user, status: :ok
      else
        render json: {error: "Not authorized"}, status: :unauthorized
      end
  end

  def update
    user = User.find_by(params[:id])
      if user == @current_user
        user.update(user_params)
        render json: user, status: :ok
      else
        render json: { error: "Unauthorized" }, status: :not_found
    end
  end
  
  def destroy
    user = User.find_by(params[:id])
        if user == @current_user
        user.destroy
        head :no_content
        else
        render json: { errors: 'Unauthorized' }, status: :unauthorized
        end
    end

  private
  def user_params
    params.permit(:username, :email, :password, :profile_pic, :bio)
  end
end
