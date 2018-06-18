import React, { Component } from 'react'

export class Toggle extends Component {

  state = {
    on: false
  }
  toggle = () => {
    this.setState({
      on: !this.state.on
    });
  }
  render() {
    const { render } = this.props;
    return (
      <div>
        {this.props.render({
          on: this.state.on,
          toggle: this.toggle
        })}
      </div>
    )
  }
}
