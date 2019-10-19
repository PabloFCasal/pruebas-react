import React from 'react';
import './App.css';
import SimpleComponent from './components/SimpleComponent';
import ComponentWithPropAndState from './components/ComponentWithPropAndState'

function ComponentAsAFunction (props){

    return(
      <p>I am a simple component too</p>
    )
}




function App() {

 
    return (
      <div className="components">
        <h2>Varios tipos de componentes en <strong>REACT</strong></h2>
  
        <h3>Simple Component</h3>
        <SimpleComponent/>
  
        <h3>Component as a function</h3>
        <ComponentAsAFunction/>

        <h3>Component with prop an state</h3>
        <ComponentWithPropAndState/>
      </div>
    );


  


  
}

export default App;
