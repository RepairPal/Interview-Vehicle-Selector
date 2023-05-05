Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  root "vehicle_selector#index"

  resources :vehicle_makes, only: %i[index]
  resources :vehicle_models, only: %i[index]
end
