import React, { Component } from 'react'

export class ToggleThree extends Component {

  state = {
    on: false
  }
  toggle = () => {
    this.setState({
      on: !this.state.on
    });
  }
  render() {
    return (
      this.props.children({
        on: this.state.on,
        toggle: this.toggle
      })
    )
  }
}
