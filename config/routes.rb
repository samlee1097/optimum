Rails.application.routes.draw do

  resources :avatars
  resources :logs
  resources :users
  
  get "/me", to: "users#show"
  post "/login", to: "sessions#create"
  post "/signup", to: "users#create"
  post '/edit-avatar', to: "avatars#update"
  get '/avatar', to: "avatars#show"
  get "/users/:username", to: "users#user_info"
  delete "/logout", to: "sessions#destroy"

  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
