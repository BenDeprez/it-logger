import React, { useEffect, Fragment } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import './App.css';
import Searchbar from './components/layout/Searchbar';
import Logs from './components/logs/Logs';
import AddBtn from './components/layout/AddBtn';
import AddLogModal from './components/logs/AddLogModal';

const App = () => {
  useEffect(() => {
    // initialize Materialize javascript allowing for the use of modals etc...
    M.AutoInit();
  });
  return (
    <Fragment>
      <Searchbar />
      <div className='container'>
        <Logs />
      </div>
      <AddBtn />
      <AddLogModal />
    </Fragment>
  );
};

export default App;
