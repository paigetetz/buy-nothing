class EventsController < ApplicationController
  skip_before_action :authorize
  def index
    render json: Event.all
  end
  def show
    event = Event.find_by_id(params[:id])
    if event.valid?
      render json: event, status: :created
      
    end
  end
end
