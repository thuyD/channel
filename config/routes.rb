Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root "static_pages#root"


  namespace :api, defaults: { format: 'JSON' } do
    delete "/posts/:post_id/likes", to: "likes#destroy"
    get "/posts/:post_id/likes", to: "likes#liked_post"
    resources :users, only: [:create] do
      # resources :follows, only: [:create, :destroy]
      patch 'follow', on: :member
      patch 'unfollow', on: :member
    end
    resource :session, only: [:create, :destroy]
    resources :posts, only: [:create, :show, :index, :destroy, :update] do
      resources :likes, only: [:create]
      resources :comments, only: [:create]
    end
    resources :comments, only: [:destroy, :show]
  end
end
