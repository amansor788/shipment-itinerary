import React from 'react';

const StopForm = (props) => {
  const renderInput = (label, name, value, error) => {
    return (
      <div>
        <label>{label}</label>
        <input name={name} value={value} autoComplete="off" />
        <div className="input-error">{error ? error : ''}</div>
      </div>
    )
  }
  
  return(
      <div className="form-container">
        {renderInput('Name', 'name', stop.names, stop.nameError)}
        {renderInput('Address', 'address', stop.address, stop.addressError)}

        <button className="button-primary" type='submit' onClick={() => buttonOnClick()}>
          Submit
        </button>

      </div>
  )
} 

export default StopForm;