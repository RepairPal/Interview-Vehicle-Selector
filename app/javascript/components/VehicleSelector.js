import React from "react"
import PropTypes from "prop-types"
import Select from 'react-select'

const makes = [
    {value: 'Honda', lable: 'Honda'}
    {value: 'Toyota', lable: 'Toyota'},
    {value: 'Nissan', lable: 'Nissan'}
  ]

class VehicleSelector extends React.Component {
  render () {
    return (
      <React.Fragment>
        Make: {this.props.make}
        Model: {this.props.model}
      </React.Fragment>
    );
  }
}

VehicleSelector.propTypes = {
  make: PropTypes.string,
  model: PropTypes.string
};

export default VehicleSelector
