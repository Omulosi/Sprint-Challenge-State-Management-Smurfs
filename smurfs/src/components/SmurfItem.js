import React from 'react';

const SmurfItem = (props) => {

  const { id, name, age, height } = props.smurf;

  return (
    <tr>
      <th scope="row">{id}</th>
      <td>{name}</td>
      <td>{age}</td>
      <td>{height}</td>
    </tr>
  );
}

export default SmurfItem;
