{
  'Toyota' => %w[Camry Corolla Prius Highlander],
  'Honda' => %w[Accord Civic CRV Fit],
  'Nissan' => %w[Altima Leaf Rogue Sentra],
}.each do |vehicle_make_name, vehicle_model_names|
  vehicle_make = VehicleMake.where(name: vehicle_make_name).first_or_create

  vehicle_model_names.each do |vehicle_model_name|
    vehicle_model = VehicleModel.where(
      name: vehicle_model_name,
      vehicle_make: vehicle_make
    ).first_or_create

    2016.upto(2022).each do |year|
      Vehicle.create(
        year: year,
        vehicle_model: vehicle_model
      )
    end
  end
end
