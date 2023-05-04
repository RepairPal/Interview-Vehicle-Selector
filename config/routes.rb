Rails.application.routes.draw do
  get "vehicle_selector", to: 'vehicle_selector#index'
  namespace :api do
    namespace :v1 do
      get 'vehicle_makes/index'
      get 'vehicle_models/index'
    end
  end
end
