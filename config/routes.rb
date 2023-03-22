Rails.application.routes.draw do
  resources :monsters
  resources :join_games
  resources :games
  resources :weapons
  resources :armors
  resources :looks
  resources :users
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"

  #Custom Routes
  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'
  get '/authorized', to: 'users#show'
  get '/monster/:id', to: 'monsters#showOne'
end
