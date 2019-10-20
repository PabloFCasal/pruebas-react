import React, { Component }from 'react';
import './App.css';
import SimpleComponent from './components/SimpleComponent';
import ComponentWithPropAndState from './components/ComponentWithPropAndState';
import Toggle from './binding/Toggle'
import Input from './binding/Input'



function ComponentAsAFunction (){

    return(
      <p>I am a simple component too</p>
    )
}




function App() {

 
    return (

      <div className="main-layer">

        <div className="components">
          <h2>Varios tipos de componentes en <strong>REACT</strong></h2>
  
          <h3>Simple Component</h3>
          <SimpleComponent/>
  
          <h3>Component as a function</h3>
          <ComponentAsAFunction/>

          <h3>Component with prop an state</h3>
          <ComponentWithPropAndState/>
        </div>

        <div className="binding">

          <h2>binding Types</h2>
          <Toggle/>







      </div>

      </div>
    );





  


  
}

export default App;
