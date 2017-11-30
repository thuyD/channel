class Api::UsersController < ApplicationController
  before_action :require_logged_in, only: [:follow, :unfollow, :update, :feed]

  def create
    @user = User.new(user_params)
    if @user.save
      login(@user)
      render 'api/users/show'
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def show
    @user = User.includes(:posts).find(params[:id])
    render 'api/users/show'
  end

  def update
    @user = User.find(current_user.id)
    if @user.update(user_params)
      render 'api/users/show'
    else
      render json: @user.errors.full_messages, status: 404
    end
  end

  def follow
    follow = current_user.out_follows.new(followee_id: params[:id])
    if follow.save
      followee = User.find(params[:id])
      @users = [current_user, followee]
      render :index
    else
      render json: follow.errors.full_messages, status: 422
    end
  end

  def unfollow
    follow = current_user.out_follows.find_by(followee_id: params[:id])
    follow.destroy!
    followee = User.find(params[:id])
    @users = [current_user, followee]
    render :index
  end

  def followers
    user = User.find(params[:id])
    @users = user.followers
    render :index
  end

  def followees
    user = User.find(params[:id])
    @users = user.followees
    render :index
  end

  def feed
    user = User.find(params[:id])
    followee_ids = user.followees.map(&:id)
    @posts = Post.where('author_id IN (?)', followee_ids)
    @post_ids = @posts.map(&:id)
    @current_user_id = params[:id]
    render 'api/posts/index'
  end

  private

  def user_params
    params.require(:user).permit(:username, :password, :bio, :name, :avatar)
  end

end
