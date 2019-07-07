import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import StopForm from './StopForm';
import StopList from './StopList';

const App = () => {
  return(
    <div className="container">
      <Header />
      <StopForm />
      <StopList />
    </div>
  )
}

export default App;