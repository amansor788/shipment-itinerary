import React from 'react';
import {connect} from 'react-redux';
import StopListItem from './StopListItem';

const StopList = ({ stops }) => {
  const renderList = () => {
    return stops.map(stop => {
      return (
          <StopListItem key={stop.id} stop={stop}/>
      );
    })

  }

  return (
    stops.length > 0 ?
      <table className="custom-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Address</th>
            <th>Complete</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {renderList()}
        </tbody>
      </table>
    : 
      <div> Please insert itinerary stops...</div>
  )
}

const mapStateToProps = (state) => {
  return {
    stops: Object.values(state.stops),
  };
}

export default connect(mapStateToProps) (StopList);