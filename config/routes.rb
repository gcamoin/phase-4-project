Rails.application.routes.draw do
  resources :reviews, only: [:index, :show, :create, :update, :destroy]
  resources :restaurants, only: [:index, :show, :create]
  resources :users, only: [:index, :show, :create]

  get "/me", to: "users#show"

  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  
end
