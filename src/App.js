import React, { useEffect } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import './App.css';

const App = () => {
  useEffect(() => {
    // initialize Materialize javascript allowing for the use of modals etc...
    M.AutoInit();
  });
  return (
    <div className='App'>
      <h1>IT Logger</h1>
    </div>
  );
};

export default App;
