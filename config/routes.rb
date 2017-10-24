Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root "static_pages#root"

  namespace :api, defaults: { format: 'JSON' } do
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy]
    #resources :follows, only: [:create, :destroy]
    #resources :comments, only: [:create, :destroy, :show]
    #resources :posts, only: [:create, :show, :index, :destroy]
  end
end
