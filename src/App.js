import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Toggle } from './Toggle';
import { ToggleTwo } from './Toggle-two';
import { ToggleThree } from './Toggle-three';


class App extends Component {
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
      <div className="App">
        <Toggle 
        render={({ on, toggle }) => (
          <div>
            {on &&  <h1>Show Me</h1>}
            <button onClick= {toggle}> Show/Hide </button>
          </div>
        )}
        />

        <ToggleTwo 
          on={this.state.on}
          toggle = {this.toggle}
        >
          <h1>Some Content</h1>
        </ToggleTwo>

        <ToggleThree >

        {
          ({on, toggle}) => (
            <div>
            {on && <h1>Some Content</h1>}
            <button onClick= {toggle}> Show/Hide </button>     
           </div>
          )
        }

        </ToggleThree>

      </div>
    );
  }
}

export default App;
