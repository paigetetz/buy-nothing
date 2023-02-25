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
end
