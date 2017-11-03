class Api::LikesController < ApplicationController
  before_action :require_logged_in

  def create
    @like = Like.new
    @like.user_id = current_user.id
    @like.post_id = params[:post_id]

    if @like.save
      render 'api/likes/show'
    else
      render json: @like.errors.full_messages, status: 422
    end
  end

  def liked_post
    liked = current_user.likes.where(post_id: params[:post_id])
    if (liked.length > 0)
      render json: true
    else
      render json: false
    end
  end

  def destroy
    likes = current_user.likes.where(post_id: params[:post_id])
    likes.destroy_all
    render json: {}
  end

end
