class CreateVehicles < ActiveRecord::Migration[7.0]
  def change
    create_table :vehicles do |t|
      t.integer :vehicle_model_id, null: false
      t.integer :year, null: false

      t.timestamps

      t.index %i[vehicle_model_id year], unique: true
    end
  end
end
