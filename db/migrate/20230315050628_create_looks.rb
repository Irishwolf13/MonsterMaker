class CreateLooks < ActiveRecord::Migration[7.0]
  def change
    create_table :looks do |t|
      t.string :race
      t.string :image

      t.timestamps
    end
  end
end
