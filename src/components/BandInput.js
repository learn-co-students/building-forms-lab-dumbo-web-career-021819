// Add BandInput component
import React, { Component } from 'react';


class BandInput extends Component {
  state = {
    name: ''
  }

  handleChange = (e) => {
    this.setState({
      name: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.handleSubmit(this.state);
    this.setState({
      name: ''
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>

          <input
          type='text'
          name='name'
          value={this.state.name}
          onChange={this.handleChange}
          placeholder='Enter new band here' />

          <br />

          <input
          type='submit'
          value='Submit' />

        </form>
      </div>
    )
  }
}

export default BandInput;
