Rails.application.routes.draw do
  
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  resources :comments
  resources :videos
  resources :users

  # get '/login', to: 'users#authenticate'
  post '/login', to: 'users#authenticate'
end
