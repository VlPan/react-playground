import React, { Component } from 'react'
import { Portal } from './Portal';

export const ToggleTwo = ({on, toggle, children}) => (
  <div>
    {on && children}
    <button onClick= {toggle}> Show/Hide </button>     
  
    <Portal>
      {on && <h1>Hi! I am a portal</h1>} 
    </Portal>
  

  </div>
);


