Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root "static_pages#root"


  namespace :api, defaults: { format: 'JSON' } do
    delete "/posts/:post_id/likes", to: "likes#destroy", as: 'post_likes'
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy]
    resources :follows, only: [:create, :destroy]
    resources :posts, only: [:create, :show, :index, :destroy, :update] do
      resources :likes, only: [:create]
      resources :comments, only: [:create]
    end
    resources :comments, only: [:destroy, :show]
  end
end
