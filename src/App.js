import React, { Component, Fragment } from 'react';
import logo from './logo.svg';
import './App.css';
import { Toggle } from './Toggle';
import { ToggleTwo } from './Toggle-two';
import { ToggleThree } from './Toggle-three';
import { Portal } from './Portal';
import {Modal} from './Modal';



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

        

        <ToggleThree >

        {
          ({on, toggle}) => (
            <Fragment>
            
              {on && <h1>Some Content</h1>}
              <button onClick= {toggle}> Show/Hide </button>     
           </Fragment>
          )
        }

        </ToggleThree>
        

        <ToggleTwo 
          on={this.state.on}
          toggle = {this.toggle}
        >
        <Fragment>
          <button onClick={this.toggle}>
            Login
          </button>
          <Modal on={this.state.on} toggle={this.toggle}>
            <h1>Still in Modal</h1>
          </Modal>
        </Fragment>
        </ToggleTwo>
        

        
      </div>
    );
  }
}

export default App;
