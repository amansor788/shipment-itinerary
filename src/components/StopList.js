import React from 'react';
import {connect} from 'react-redux';
import StopListItem from './StopListItem';

const StopList = ({ stops }) => {
  const renderList = () => {
    return stops.map((stop, id) => {
      return (
          <StopListItem key={id} stop={{...stop, id}}/>
      );
    })

  }

  return (
    stops.length > 0 ?
      <table className="custom-table">
        <thead>
          <tr>
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
      <div className="custom-table"> Please insert itinerary stops...</div>
  )
}

const mapStateToProps = (state) => {
  return {
    stops: Object.values(state.stops),
  };
}

export default connect(mapStateToProps) (StopList);