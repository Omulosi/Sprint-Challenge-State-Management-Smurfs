import React from "react";
import SmurfsTable from './SmurfsTable';
import Header from './Header';

import "./App.css";


const  App = props => {
  return (
    <div className="App">
      <Header />
      <div className="main-content container">
        <button className="add-btn">Add a Smurf</button>
        <SmurfsTable />
      </div>
    </div>
  );
}

export default App;
