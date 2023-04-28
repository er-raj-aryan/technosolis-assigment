import React from 'react';
import './App.css';
import Login from './components/Login';
import Register from './components/Register';

function App() {
  return (
    <div className="App">
    <div style={{display:"flex",gap:20}}>

      <Login />
      <Register />
    </div>
    </div>
  );
}

export default App;
