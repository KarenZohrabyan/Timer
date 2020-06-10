import React from 'react';
import './App.css';
import TTimer from './comp/cod';

function App() {
  return (
    <div className="App">
      <TTimer timeoutSec={10}/>
    </div>
  );
}

export default App;
