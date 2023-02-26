class EventsController < ApplicationController
  skip_before_action :authorize
  def index
    render json: Event.all
  end

  def show
    event = Event.find_by_id(params[:id])
    if event
      render json: event, status: :ok
    else 
      render json: { errors: event.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def create
    event = Event.create(event_params)
    if event.valid?
      render json: event, status: :created
    else
      render json: { errors: event.errors.full_messages }, status: :unprocessable_entity

  end

  def update
    event = Event.find_by(params[:id])
    if event.user == @current_user
        event.update(event_params)
        render json: event, status: :ok
      else
        render json: { error: "Unauthorized" }, status: :unauthorized
    end
  end
  
  def destroy
    event = Event.find_by(params[:id])
        if event.user == @current_user
        event.destroy
        head :no_content
        else
        render json: { errors: 'Unauthorized' }, status: :unauthorized
        end
    end

  private
  def event_params
    params.permit(:name, :description, :time, :date, :location, :image_url)
  end
end
