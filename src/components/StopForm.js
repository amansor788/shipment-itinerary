import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { addStop, updateStop, unselectStop } from '../actions';

const StopForm = ({ stop, addStop, updateStop, unselectStop }) => {
  const [stopState, setStopState] = useState({
      name: '',
      nameError: '',
      address: '',
      addressError: '',
  })

  useEffect(() => {
    setStopState({
      id: stop.id,
      name: stop.name,
      nameError: '',
      address: stop.address,
      addressError: '',
    });
  }, [stop]);
  
  const renderInput = (label, name, value, error, handleChange) => {
    return (
      <div>
        <label>{label}</label>
        <input 
          name={name} 
          value={value} 
          autoComplete="off"
          onChange={handleChange} />
        <div className="input-error">{error ? error : ''}</div>
      </div>
    )
  }

  const validate = () => {
    let nameErr = '';
    let addressErr = ''

    if (stopState.name.length === 0) {
      nameErr = 'Enter a name.'
    }

    if (stopState.address.length <= 3) {
      addressErr = 'Enter an address of at least 4 characters.'
    }

    setStopState({ ...stopState, nameError: nameErr, addressError: addressErr})

    return (nameErr === '' && addressErr === '');
  }

  const submitForm = () => {
    //ADD OR UPDATE
    if (validate()){
        stop.id === null 
        ? addStop(stopState)
          .then(() => setStopState({
            name: '',
            nameError: '',
            address: '',
            addressError: '',
          }))      
          .catch(() => setStopState({
            ...stopState
            , addressError: 'Address invalidated by server.'}))
        : updateStop(stopState)
            .then(() => unselectStop())
            .catch(() => setStopState({
              ...stopState
              , addressError: 'Address invalidated by server.'}));
    } 
  }

  const cancelForm = () => {
    stop.id === null
      ? setStopState({
        name: '',
        nameError: '',
        address: '',
        addressError: '',
      })
      : unselectStop();
  }

  return(
      <div className="form-container">
        {renderInput('Name'
          , 'nameInput'
          , stopState.name
          , stopState.nameError
          , (e) => {setStopState({...stopState, name: e.target.value})})}
        
        {renderInput('Address'
          , 'addressInput'
          , stopState.address
          , stopState.addressError
          , (e) => {setStopState({...stopState, address: e.target.value})})}

        <button 
          className="button-primary" type='submit' 
          onClick={() => submitForm()}>
          Submit
        </button>
        <button className="button-secondary" onClick={() => cancelForm()}>
          Cancel
        </button>
      </div>
  )
} 

const mapStateToProps = (state) => {
  return {
    stop: state.selectedStop,
  };
}

export default connect (mapStateToProps, { addStop, updateStop, unselectStop }) (StopForm);