import React from "react"
import PropTypes from "prop-types"

const VehicleModelSelector = ({ selectedModel, selectModel, vehicleModels }) => {
  return (
    <React.Fragment>
      <label>
        Select a Model
      </label>

      <select name="vehicle_model_id" value={selectedModel} onChange={selectModel}>
        <option>None</option>
        {vehicleModels.map(
          vehicleModel =>
            <option key={vehicleModel.id} value={vehicleModel.id}>
              {vehicleModel.name}
            </option>
        )}
      </select>
    </React.Fragment>
  )
}

VehicleModelSelector.propTypes = {
  selectedModel: PropTypes.number,
  selectModel: PropTypes.func,
  vehicleModels: PropTypes.array
}

export default VehicleModelSelector
