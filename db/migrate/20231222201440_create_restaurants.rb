class CreateRestaurants < ActiveRecord::Migration[6.1]
  def change
    create_table :restaurants do |t|
      t.string :name
      t.string :cuisine_type
      t.integer :rating
      t.boolean :delivery

      t.timestamps
    end
  end
end
