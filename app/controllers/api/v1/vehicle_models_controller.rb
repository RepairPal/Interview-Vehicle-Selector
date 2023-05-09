module Api
  module V1
    class VehicleModelsController < ApplicationController
      def index
        vehicle_models = VehicleModel.all
        vehicle_models = vehicle_models.where(vehicle_make_id: make_params[:make_id]) if make_params[:make_id]
        render json: vehicle_models
      end

      private

      def make_params
        params.permit(:make_id)
      end
    end
  end
end
