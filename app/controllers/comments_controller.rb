class CommentsController < ApplicationController
  skip_before_action :authorize
  def index
    render json: Comment.all
  end

  def show
    comment = Comment.find_by_id(params[:id])
    if comment
      render json: comment
    else 
      render json: {error: "Comment not found"}, status: :not_found
    end
  end

  def create
    comment = Comment.create(comment_params)
    if comment.valid?
        render json: comment, status: :created
        
    else
    
        render json: {error: comment.errors.full_messages}, status: :unprocessable_entity
    end
  end

private

def comment_params
  params.permit(:commentary, :user_id, :listing_id)
end
