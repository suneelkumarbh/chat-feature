class UsersController < ApplicationController
  before_action :set_user
  def show
    @users = User.all_except(current_user)
  end

  protected

  def set_user
    @selected_user = User.find_by_id(params[:id])
  end
end
