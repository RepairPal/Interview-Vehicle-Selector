module Api
  module V1
    class VehicleModelsController < ApplicationController
      def index
        vehicle_models = VehicleModel.all
        vehicle_models = vehicle_models.where(vehicle_make_id: model_params[:make]) if model_params[:make]
        render json: vehicle_models
      end

      private

      def model_params
        params.permit(:make)
      end
    end
  end
end
