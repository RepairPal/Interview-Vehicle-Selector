import React, { useEffect, useState } from "react"
import PropTypes from "prop-types"

import VehicleModelSelector from "./VehicleModelSelector"

const VehicleSelector = () => {
  const [vehicleMakes, setVehicleMakes] = useState([])
  const [selectedMake, setSelectedMake] = useState()
  const [vehicleModels, setVehicleModels] = useState([])
  const [selectedModel, setSelectedModel] = useState()

  useEffect(() => {
    fetch("/vehicle_makes")
      .then(response => response.json())
      .then(json => setVehicleMakes(json))
  }, [])

  const selectMake = event => {
    const vehicleMakeId = event.target.value
    setSelectedMake(vehicleMakeId)
    
    if(!vehicleMakeId) return

    fetch(`/vehicle_models?vehicle_make_id=${vehicleMakeId}`)
      .then(response => response.json())
      .then(json => setVehicleModels(json))
  }

  const selectModel = event => {
    setSelectedModel(event.target.value)
  }

  return (
    <form>
      <label>Select a Make</label>
      <select name="vehicle_make_id" value={selectedMake} onChange={selectMake}>
        <option>None</option>
        {vehicleMakes.map(
          vehicleMake =>
            <option key={vehicleMake.id} value={vehicleMake.id}>
              {vehicleMake.name}
            </option>
        )}
      </select>
      
      {selectedMake
        ? <VehicleModelSelector selectedModel={selectedModel} selectModel={selectModel} vehicleModels={vehicleModels} />
        : null
      }
    </form>
  )
}

export default VehicleSelector
