class CreateArmors < ActiveRecord::Migration[7.0]
  def change
    create_table :armors do |t|
      t.string :material
      t.integer :defense
      t.integer :weight
      t.integer :movement_reduction
      t.string :image

      t.timestamps
    end
  end
end
