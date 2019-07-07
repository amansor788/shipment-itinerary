import React from 'react';

const StopListItem = ({stop}) => {
  return (
    <tr>
      <td>{stop.id}</td>
      <td>{stop.name}</td>
      <td>{stop.address}</td>
      <td>
        <input
          type='checkbox'
          defaultChecked={stop.complete}
          onChange={() => setStopCompleted(stop)}
        />
      </td>
      <td>
        <button className="button-primary" onClick={() => editStop(stop)}>
          Edit
        </button>
        <button className="button-secondary" onClick={() => deleteStop(stop)}>
          Delete
        </button>
      </td>
    </tr>
  )
}

export default StopListItem;
