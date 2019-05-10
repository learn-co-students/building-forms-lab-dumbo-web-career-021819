import React, { Component } from 'react'
import { connect } from 'react-redux'
import BandInput from '../components/BandInput'

class BandsContainer extends Component {
  render() {
    return(
      <div>
        <BandInput bands={this.props.bands}/>
        <ul>
          {this.props.bands.map((singleBand) => <li>{singleBand.name}</li>)}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { bands: state.bands}
}

export default connect(mapStateToProps)(BandsContainer)
