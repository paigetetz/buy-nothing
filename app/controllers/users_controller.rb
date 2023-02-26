class UsersController < ApplicationController
  skip_before_action :authorize, only: [:create, :show]
  skip_before_action :verify_authenticity_token
  def create 
    user = User.create(user_params)
    if user.valid?
      session[:user_id] = user.id
      render json: user, status: :created
    else
      render json: { error: user.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def show
    user = User.find_by(id: session[:user_id])
    if user
      render json: user, status: :ok
    else
      render json: { error: "Not authorized" }, status: :unauthorized
    end
  end

  def update
    user = User.find_by(id: params[:id])
    if user == @current_user
      user.update(user_params)
        render json: user, status: :ok
    else
      render json: { error: "Unauthorized" }, status: :unauthorized
    end
  end
  
  def destroy
    user = User.find_by(id: params[:id])
    if user == @current_user
      user.destroy
      head :no_content
    else
      render json: { error: "Unauthorized" }, status: :unauthorized
    end
  end

  private

  def user_params
    params.permit(:username, :email, :password, :profile_pic, :bio)
  end
end
