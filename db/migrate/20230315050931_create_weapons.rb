class CreateWeapons < ActiveRecord::Migration[7.0]
  def change
    create_table :weapons do |t|
      t.string :style
      t.integer :attack
      t.integer :weight
      t.string :image

      t.timestamps
    end
  end
end
