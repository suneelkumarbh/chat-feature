class MessagesController < ApplicationController
  
  def create
    @message = Message.new(message_params)
    @message.sender_id = current_user.id
    if @message.save!
      ActionCable.server.broadcast('chatroom_channel', { message: @message.message,
                                                         sender_id: @message.sender_id,
                                                         receiver_id: @message.receiver_id
                                                        })

    end
  end

  private

  def message_params
    params.require(:message).permit(:receiver_id, :message)
  end
end
