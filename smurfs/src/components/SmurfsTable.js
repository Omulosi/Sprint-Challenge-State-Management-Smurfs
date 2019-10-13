import React, { useContext, useEffect } from 'react'; 
import SmurfItem from './SmurfItem';
import { SmurfContext } from '../contexts/SmurfContext';
import axios from 'axios';

const SmurfsTable = (props) => {
  const [smurfs, setSmurfs] = useContext(SmurfContext)

  useEffect(() => {
    axios.get('http://localhost:3333/smurfs')
      .then(response => response.data)
      .then(data => {
        setSmurfs(data);
      })
      .catch(error => {
        console.log(error);
      })
  }, [smurfs])
  
  return (
    <div className="table-md">
      <table className="table table-striped table-dark">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Age</th>
            <th scope="col">Height</th>
          </tr>
        </thead>
        <tbody>
          {
            smurfs.map((smurf) => (
              <SmurfItem smurf={smurf} key={smurf.id}/>
            ))
          }
        </tbody>
      </table>
    </div>
  )
}

export default SmurfsTable;
