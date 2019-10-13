import React, { useReducer } from 'react';

const initialState = {
  smurfs: [],
  loading: false,
  showModal: false,
  error: null
}

const reducer = (state, action) => {
  switch(action.type) {
    case 'ADD_SMURF':
      return {
        ...state, smurfs: action.payload
      }

    case 'CLOSE_MODAL':
      return {...state, showModal: false}

    default:
      return state;
  }
}
