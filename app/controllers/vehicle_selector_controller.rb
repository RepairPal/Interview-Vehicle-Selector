class VehicleSelectorController < ApplicationController
  def index
    render react_component: 'VehicleSelector'
  end
end
