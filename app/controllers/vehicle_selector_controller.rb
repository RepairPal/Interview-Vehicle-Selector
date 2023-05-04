class VehicleSelectorController < ApplicationController
  def index
    render component: 'VehicleSelector', props: {test: 'test'}
  end
end
