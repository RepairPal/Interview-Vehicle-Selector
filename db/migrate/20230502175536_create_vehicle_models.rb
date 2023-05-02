class CreateVehicleModels < ActiveRecord::Migration[7.0]
  def change
    create_table :vehicle_models do |t|
      t.integer :vehicle_make_id, null: false
      t.string :name, null: false

      t.timestamps

      t.index %i[vehicle_make_id name], unique: true
    end
  end
end
