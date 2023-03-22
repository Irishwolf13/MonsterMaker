class CreateGames < ActiveRecord::Migration[7.0]
  def change
    create_table :games do |t|
      t.integer :user_id
      t.integer :difficulty

      t.timestamps
    end
  end
end
