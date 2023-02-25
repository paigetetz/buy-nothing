class ListingsController < ApplicationController
  skip_before_action :authorize
  
  def index
    render json: Listing.all
  end

  def show
    listing = Listing.find_by(params[:id])
    if listing
      render json: listing
    else 
      render json: { error: "Listing not found" }, status: :not_found
    end
  end
  
  def create
    listing = Listing.create(listing_params)
    if listing.valid?
      render json: listing status: :created
    else
      render json: listing.errors, status: :unprocessable_entity
    end
end
