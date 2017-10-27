class Api::PostsController < ApplicationController
  before_action :require_logged_in, only: [:create, :update, :destroy]

  def create
    @post = Post.new(user_params)
    @post.author_id = current_user.id

    if @post.save
      render 'api/posts/show'
    else
      render json: @post.errors.full_messages, status: 422
    end
  end

  def show
    @post = Post.find(params[:id])
    render 'api/posts/show'
  end

  def destroy
    post = Post.find(params[:id])
    post.destroy
    render 'api/posts/index'
  end

  def index
    @posts = Post.all.includes(:author)
    render :index
  end

  def update
    @post = current_user.posts.find(params[:id])
    if @link.update(link_params)
      render 'api/posts/show'
    else
      render json: @post.errors.full_messages
    end
  end

  private

  def post_params
    params.require(:post).permit(:title, :body)
  end
end
