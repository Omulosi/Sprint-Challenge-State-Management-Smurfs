import React, { useState, createContext } from 'react';


export const SmurfContext = createContext();

const SmurfContextProvider = props => {
  const smurfsHook = useState([]);

  return (
    <SmurfContext.Provider value={smurfsHook}>
      {props.children}
    </SmurfContext.Provider>
  )
}

export default SmurfContextProvider;
