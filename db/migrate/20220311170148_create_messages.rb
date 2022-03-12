class CreateMessages < ActiveRecord::Migration[6.1]
  def change
    create_table :messages do |t|
      t.integer :sender_id, null: false
      t.integer :receiver_id, null: false
      t.string :message, null: false

      t.timestamps
    end
  end
end
