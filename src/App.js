import React from 'react';
import './App.css';
import Content from './compnents/PageContente.component'
import RestApi from "./compnents/CallRestApi.js"




function App() {
  return (
        
    <div className="App">
    
       <RestApi />
    
    </div>
  );
}

export default App;
