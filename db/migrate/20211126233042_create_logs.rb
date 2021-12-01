class CreateLogs < ActiveRecord::Migration[6.1]
  def change
    create_table :logs do |t|
      t.integer :weight
      t.string :activity_type
      t.integer :activity_duration
      t.string :date
      t.integer :happiness
      t.string :notes
      t.integer :likes, :default => 0
      t.integer :user_id

      t.timestamps
    end
  end
end
