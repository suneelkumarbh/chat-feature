# frozen_string_literal: true

Rails.application.routes.draw do
  root 'users#show'
  devise_for :users, controllers: {
    sessions: 'users/sessions',
    registrations: 'users/registrations'
  }
  resources :users, only: [:show]
  resources :messages

  mount ActionCable.server, at: '/cable'
end
