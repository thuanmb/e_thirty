Rails.application.routes.draw do
  devise_for :users
  mount RailsAdmin::Engine => '/admin', as: 'rails_admin'
  require 'sidekiq/web'
  apipie
  root to: 'e_thirty#index'

  mount Sidekiq::Web => '/sidekiq'

  namespace :api do
    namespace :v1 do
      resources :articles, only: [:index, :show]
      resources :users do
        collection do
          get :me
        end
      end
      resources :bookmarks, only: [:index, :create]
    end
  end

  resources :articles, only: [:new, :create]

  match '*a', to: 'e_thirty#index', via: :all
end
