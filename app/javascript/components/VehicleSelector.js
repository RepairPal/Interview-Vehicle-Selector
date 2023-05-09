import React, { useState } from "react"
import PropTypes from "prop-types"
import Select from 'react-select'
import AsyncSelect from 'react-select/async'

const axios = require('axios');

class VehicleSelector extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      makeOptions : [],
      modelOptions: [],
      makeId: null,
      modelId: null,
      makeName: '',
      modelName: ''
    }
  }

  async getMakeOptions(){
    const response = await axios.get('api/v1/vehicle_makes/index')
    const makes = response.data

    const make_options = makes.map(make => ({
      "value" : make.id,
      "label" : make.name
    }))
    this.setState({makeOptions: make_options})
  }

  async getModelOptions(make_id){
    const response = await axios.get('api/v1/vehicle_models/index', {params: {make_id: make_id}})
    const models = response.data

    const model_options = models.map(model => ({
      "value" : model.id,
      "label" : model.name
    }))
    this.setState({modelOptions: model_options})
  }

  componentDidMount(){
    this.getMakeOptions()
    this.getModelOptions(this.state.makeId)
  }

  updateModels(make){
    this.setState({modelOptions: this.getModelOptions(make.value)})
    this.setState({makeName: make.label})
    this.setState({makeId: make.value})
  }

  setModel(model){
    this.setState({modelName: model.label})
    this.setState({modelId: model.value})
  }

  render () {
    return (
      <React.Fragment>
        <Select placeholder='Select vehicle make' options={this.state.makeOptions} onChange={this.updateModels.bind(this)}/>
        {this.state.makeId && <Select placeholder='Select vehicle model' options={this.state.modelOptions} onChange={this.setModel.bind(this)}/>}
        <br/>
        {this.state.modelId && <div style={{textAlign: "center"}}>You selected a {this.state.makeName} {this.state.modelName}</div>}
      </React.Fragment>
    )
  }
}

VehicleSelector.propTypes = {
  make: PropTypes.string,
  model: PropTypes.string
}

export default VehicleSelector
