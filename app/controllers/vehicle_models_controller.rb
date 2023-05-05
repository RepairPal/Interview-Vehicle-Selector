class VehicleModelsController < ApplicationController
  def index
    @vehicle_models = VehicleModel.where(vehicle_make_id: params[:vehicle_make_id]).limit(10)

    json = @vehicle_models.map do |vehicle_model|
      { id: vehicle_model.id, name: vehicle_model.name }
    end.to_json

    render json: json, status: :ok
  end
end
