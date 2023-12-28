Rails.application.routes.draw do
  # resources :reviews, only: [:index, :show, :create, :update, :destroy]
  resources :restaurants, only: [:index, :show, :create]
  resources :users, only: [:index, :show, :create]
  
end
