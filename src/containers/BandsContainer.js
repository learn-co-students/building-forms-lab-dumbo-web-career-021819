import React, { Component } from 'react'
import { connect } from 'react-redux'
import BandInput from '../components/BandInput'

// connection to Redux store

class BandsContainer extends Component {

  handleSubmit = (payload) => {
    this.props.addBand(payload)
  }

  render() {
    return(
      <div>
        < BandInput handleSubmit={this.handleSubmit} />
        <ul>
          {this.props.bands.map(band => <li key={band.name}>{band.name}</li>)}
        </ul>
      </div>
    )
  }
}

function mapStateToProps (state) {
  console.log(state)
  return state
}

function mapDispatchToProps (dispatch) {
  return {
    addBand: formData => dispatch({ type: 'ADD_BAND', payload: formData})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer)
