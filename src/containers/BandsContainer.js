import React, { Component } from 'react';
import { connect } from 'react-redux';
import BandInput from '../components/BandInput';

class BandsContainer extends Component {

  handleSubmit = (band) => {
    this.props.addBand(band);
  }

  render() {
    return(
      <div>
        <BandInput handleSubmit={this.handleSubmit} />
        <br />
        <p>Bands:</p>
        {this.props.bands.map(band => <li>{band.name}</li>)}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    bands: state.bands
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addBand: newBand => dispatch({ type: 'ADD_BAND', payload: newBand })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer)
