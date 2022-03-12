class MessagesController < ApplicationController
  
  def create
    @message = Message.new(message_params)
    @message.sender_id = current_user.id
    @message.save!
  end

  private

  def message_params
    params.require(:message).permit(:receiver_id, :message)
  end
end
