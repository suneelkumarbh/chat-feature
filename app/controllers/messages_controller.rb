# frozen_string_literal: true

class MessagesController < ApplicationController
  def create
    @message = Message.new(message_params)
    @message.sender_id = current_user.id
    if @message.save!
      ActionCable.server.broadcast('chatroom_channel', { message: @message.message,
                                                         sender_id: @message.sender_id,
                                                         receiver_id: @message.receiver_id,
                                                         sender_name: @message.sender.name,
                                                         receiver_name: @message.receiver.name,
                                                         created_at_time: @message.created_at.strftime('%H:%M'),
                                                         image_url: ActionController::Base.helpers.asset_path('avatar.png') })

    end
  end

  private

  def message_params
    params.require(:message).permit(:receiver_id, :message)
  end
end
