import React, { Component } from 'react'

export const ToggleTwo = ({on, toggle, children}) => (
  <div>
    {on && children}
    <button onClick= {toggle}> Show/Hide </button>     
  </div>
);


