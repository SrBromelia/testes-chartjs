Rails.application.routes.draw do
  root 'home#index'
  get 'home/index'

  post 'type', to: 'home#type'
  post 'groups', to: 'home#groups'
  get 'groups', to: 'home#groups'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
