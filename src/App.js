import React from 'react';
import './App.css';
import Sidebar from './Sidebar'
import Main from './Main'
import { contacts } from './static-data';
import _ from 'lodash';

const App = () => {
  return (
    <div className="App">
      <Sidebar contacts={_.values(contacts)}/>
      <Main />
    </div>
  );
}

export default App;
