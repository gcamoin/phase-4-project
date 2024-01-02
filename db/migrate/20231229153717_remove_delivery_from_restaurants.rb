class RemoveDeliveryFromRestaurants < ActiveRecord::Migration[6.1]
  def change
    remove_column :restaurants, :delivery, :boolean
  end
end
