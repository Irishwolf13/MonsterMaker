class CreateMonsters < ActiveRecord::Migration[7.0]
  def change
    create_table :monsters do |t|
      t.integer :user_id
      t.integer :look_id
      t.integer :armor_id
      t.integer :weapon_id
      t.string :monster_name
      t.integer :level
      t.integer :hit_points
      t.integer :base_armor
      t.integer :attack
      t.integer :magic
      t.integer :movement
      t.string :bio

      t.timestamps
    end
  end
end
