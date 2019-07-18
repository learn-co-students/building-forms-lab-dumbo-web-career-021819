// Add BandInput component
import React, { Component } from 'react'

// child of BandsContainer. Have form with text input and submit. controlled.
// this.target.name. Update Redux store on submit

class BandInput extends Component {

  state = {
    name: ''
  }

  handleChange = (e) => this.setState({name: e.target.value})

  handleSubmit = e => {
    e.preventDefault()
    this.props.handleSubmit(this.state)
    this.setState({name: ''})
  }

  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>New Band:</label>
          <input type='text' onChange={this.handleChange} value={this.state.name}></input>
          <input type='submit' value='Add'></input>
        </form>
      </div>
    )
  }
}

export default BandInput
