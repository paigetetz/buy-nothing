class CommentsController < ApplicationController
  skip_before_action :authorize
end
