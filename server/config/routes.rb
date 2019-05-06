Rails.application.routes.draw do
  default_url_options host: 'localhost:3000'
  resources :comments
  resources :videos
  resources :users
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
