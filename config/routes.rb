# frozen_string_literal: true
Rails.application.routes.draw do

  root 'users#show'
  devise_for :users, controllers: {
    sessions: 'user/sessions',
    registrations: 'user/registrations'
  }
  resources :users, only: [:show]
  resources :messages
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
