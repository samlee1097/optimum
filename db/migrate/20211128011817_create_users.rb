class CreateUsers < ActiveRecord::Migration[6.1]
  def change
    create_table :users do |t|
      t.string :username
      t.string :password_digest
      t.integer :age
      t.integer :weight
      t.string :gender
      t.integer :goal_weight

      t.timestamps
    end
  end
end
