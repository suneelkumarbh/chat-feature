class UsersController < ApplicationController
  before_action :set_user
  def show
    @users = User.all_except(current_user)
    @messages = current_user.conversation(@selected_user).uniq
                .sort_by(&:created_at).group_by{ |t| t.created_at.to_date }
    
  end

  protected

  def set_user
    @selected_user = User.find_by_id(params[:id]) || current_user.received_messages.last&.sender || current_user.sent_messages.last&.receiver || User.last
  end
end
