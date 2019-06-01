import React from 'react';
import './Header.css';
import HeaderContent from './HeaderContent';

const HeaderTitle = () => {
  return (
    <div className="header-title">
      <p><strong>Lambda School</strong> @lambdaSchool • 26 jan </p>
      <HeaderContent />
    </div>
  );
};

export default HeaderTitle;