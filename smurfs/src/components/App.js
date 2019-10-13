import React, { useState } from "react";
import SmurfsTable from './SmurfsTable';
import Header from './Header';
import FormModal from './FormModal';
import Modal from './Modal';

import "./App.css";


const  App = props => {
  const [state, setState] = useState({showModal: false });

  const toggleModal = () => setState({showModal: !state.showModal});

  return (
    <div className="App">
      <Header />
      <div className="main-content container">
        <button className="add-btn" onClick={toggleModal}>Add a Smurf</button>
        <SmurfsTable />

        {
          state.showModal? (
            <Modal toggleModal={toggleModal}>
              <FormModal />
            </Modal>
          ): null
        }
      </div>
    </div>
  );
}

export default App;
