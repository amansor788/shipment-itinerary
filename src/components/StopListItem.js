import React from 'react';
import { connect } from 'react-redux';
import { editStop } from '../actions';

const StopListItem = ({ stop, editStop }) => {

  const formatted_address = `
    ${stop.geocoded_address.address_1} - 
    ${stop.geocoded_address.city} -
    ${stop.geocoded_address.state_province}`;

  const onEditStop = () => {
    editStop(stop)
  }
  
  return (
    <tr>
      <td>{stop.name}</td>
      <td>{formatted_address}</td>
      <td>
        <input
          type='checkbox'
          defaultChecked={stop.complete}
          onChange={() => setStopCompleted(stop)}
        />
      </td>
      <td>
        <button className="button-primary" onClick={() => onEditStop()}>
          Edit
        </button>
        <button className="button-secondary" onClick={() => deleteStop()}>
          Delete
        </button>
      </td>
    </tr>
  )
}

export default connect (null, { editStop }) (StopListItem);
