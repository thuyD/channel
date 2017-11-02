class Api::LikesController < ApplicationController
  before_action :require_logged_in

  def create
    @like = Like.new
    @like.user_id = current_user.id
    @like.post_id = params[:post_id]

    if @like.save
      render 'api/posts/show'
    else
      render json: @like.errors.full_messages, status: 422
    end
  end

  def destroy
    like = current_user.likes.find(params[:id])
    like.destroy
    render json: {}
  end

end
