Rails.application.routes.draw do
  root 'greeting#index'

  namespace :api do
    namespace :v1 do
      get 'greeting', to: 'greeting#index'
    end
  end
end