class CreateJoinGames < ActiveRecord::Migration[7.0]
  def change
    create_table :join_games do |t|
      t.integer :game_id
      t.integer :monster_id
      t.integer :monster_count

      t.timestamps
    end
  end
end
