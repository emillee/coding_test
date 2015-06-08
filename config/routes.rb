Rails.application.routes.draw do
  resources :products, only: [:index, :update]
  
  root to: 'main#index'
end
