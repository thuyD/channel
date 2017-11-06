class Api::UsersController < ApplicationController
  before_action :require_logged_in, only: [:follow, :unfollow, :update]

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
    @user = User.find(params[:id])
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
      debugger
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

  private

  def user_params
    params.require(:user).permit(:username, :password, :bio, :name, :image)
  end

end
