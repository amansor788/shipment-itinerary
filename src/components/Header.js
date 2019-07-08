import React from 'react';
import logo from '../css/company-logo.png';

const Header = () => {
  return (
    <div className="header" data-test="component-header">
      <img src={logo} alt='company logo' />
    </div>
  )
};

export default Header;