class CreateLogs < ActiveRecord::Migration[6.1]
  def change
    create_table :logs do |t|
      t.string :title
      t.integer :weight
      t.string :activity_type
      t.string :activity_duration
      t.string :date
      t.integer :happiness
      t.string :notes
      t.integer :likes
      t.integer :user_id

      t.timestamps
    end
  end
end
