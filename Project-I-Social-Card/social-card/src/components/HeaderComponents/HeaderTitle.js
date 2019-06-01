import React from 'react';
import './Header.css';
import HeaderContent from './HeaderContent';

const HeaderTitle = () => {
  return (
    <div className="header-title">
      <h1>Lambda School</h1> 
      <h2>@lambdaSchool • 26 jan </h2>
      <HeaderContent />
    </div>
  );
};

export default HeaderTitle;