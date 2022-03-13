# frozen_string_literal: true
class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
  
  has_many :sent_messages, foreign_key: :sender_id, class_name: 'Message'
  has_many :received_messages, foreign_key: :receiver_id, class_name: 'Message'
  scope :all_except, ->(user) { where.not(id: user) }

  def user_last_message(user)
    self.received_messages.where(sender_id: user.id).last
  end

  def conversation(user)
    self.sent_messages.where(receiver_id: user.id) + user.sent_messages.where(receiver_id: self.id)
  end
end
