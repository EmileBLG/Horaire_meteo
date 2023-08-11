import './App.css';
import React from 'react';
import {Condition_actuelle} from './Condition_actuelle/Condition_actuelle';

function App() {
  return (
    <div className="App">
      <div className='Meteo'>
        <Condition_actuelle />
      </div>
      <div className='Horaire'>
        <p>Div qui contient l'horaire</p>
      </div>
      
    </div>
  );
}

export default App;

