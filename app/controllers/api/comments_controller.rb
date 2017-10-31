class Api::CommentsController < ApplicationController
  before_action :require_logged_in, only: [:create, :destroy]

  def create
    @comment = Comment.new(comment_params)
    @comment.author_id = current_user.id
    @comment.post_id = params[:post_id]
    if @comment.save
      render 'api/comments/show'
    else
      render json: @comment.errors.fullmessages, status: 422
    end
  end

  def destroy
    comment = current_user.comments.find(params[:id])
    comment.destroy
    render json: {}
  end

  def show
    @comment = Comment.find(params[:id])
    render 'api/comments/show'
  end

  private

  def comment_params
    params.require(:comment).permit(:body)
  end
end
