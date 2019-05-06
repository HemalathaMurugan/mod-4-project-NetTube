Rails.application.routes.draw do
  default_url_options host: 'localhost:3000'
  resources :comments
  resources :videos
  resources :users

  # get '/login', to: 'users#authenticate'
  post '/login', to: 'users#authenticate'
end
