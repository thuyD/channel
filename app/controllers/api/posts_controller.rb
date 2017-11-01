class Api::PostsController < ApplicationController
  before_action :require_logged_in, only: [:create, :update, :destroy]

  def create
    @post = Post.new(post_params)
    @post.author_id = current_user.id
    if @post.save
      render 'api/posts/show'
    else
      render json: @post.errors.full_messages, status: 422
    end
  end

  def show
    @post = Post.includes(comments: :author).find(params[:id])
    render 'api/posts/show'
  end

  def destroy
    post = currentUser.posts.find(params[:id])
    post.destroy
    render 'api/posts/index'
  end

  def index
    @posts = Post.all.includes(:author, :comments)
    render :index
  end

  def update
    @post = current_user.posts.find(params[:id])
    if @post.update(post_params)
      render 'api/posts/show'
    else
      render json: @post.errors.full_messages, status: 404
    end
  end

  private

  def post_params
    params.require(:post).permit(:title, :body, :image)
  end
end
