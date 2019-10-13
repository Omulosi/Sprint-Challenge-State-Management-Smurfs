import React, { useState, useContext } from 'react';
import axios from 'axios';
import { SmurfContext } from '../contexts/SmurfContext';


const FormModal = props => {
  const [formState, setFormState] = useState({name: '', age: '', height: ''});
  const [error, setError] = useState(null);
  const [smurfs, setSmurfs] = useContext(SmurfContext);


  const handleChange = (event) => {
    setFormState({...formState, [event.target.name]: event.target.value})
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    setError(null);
    axios.post('http://localhost:3333/smurfs', formState)
      .then(response => {
        setSmurfs(response.data);
        props.toggleModal();
      })
      .catch(error => {
        setError(error.message);
      })
  }

  return (
    <form className="modal-content" onSubmit={handleSubmit}>
      <div className="error">{error && error}</div>
      <div className="form-group">
        <label htmlFor="">Name</label>
        <input 
          type="text" 
          name="name"
          className="form-control" 
          placeholder="Name"
          value={formState.name}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="exampleInputPassword1">Age</label>
        <input 
          type="number"
          name="age"
          className="form-control"
          placeholder="Age in years"
          value={formState.age}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="exampleInputPassword1">Height</label>
        <input 
          type="number"
          name="height"
          className="form-control" 
          placeholder="Height in cm"
          value={formState.height}
          onChange={handleChange}
        />
      </div>
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  )
}

export default FormModal;
