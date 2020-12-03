import './App.css';
import React, { useState } from 'react';
import RampInput from './components/RampInput';


function App() {
  // let input = ["Apple", "Banana", "Mango", "Strawberry", "Pear"];
  // let input = [];
  // let input = "Hello World";
  // let input = "";
  let input = true === false;
  if (!(input instanceof Array) && input instanceof Object) {
    input = JSON.stringify(input);
  }
  return (

    <div className="App">

      <h1><div id="ramp-logo"></div> Ramp 3 Input</h1>
      <RampInput input={input} />
    </div>
  );
}

export default App;

