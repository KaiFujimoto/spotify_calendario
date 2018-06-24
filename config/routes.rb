Rails.application.routes.draw do
  root "static_pages#root"

  namespace :api, defaults: { format: :json } do
    resources :events, only: [:index, :show, :create, :update, :destroy]
  end
end
