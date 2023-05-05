class VehicleMakesController < ApplicationController
  def index
    @vehicle_makes = VehicleMake.limit(10)

    json = @vehicle_makes.map do |vehicle_make|
      { id: vehicle_make.id, name: vehicle_make.name }
    end.to_json

    render json: json, status: :ok
  end
end
