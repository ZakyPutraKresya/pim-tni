import React from 'react';
import Loader from 'react-loader-spinner';

const Spinner = () => {
  return (
    <div className="spinner-container">
      <Loader type="BallTriangle" color="#0070f3" height={50} width={50} />
    </div>
  );
};

export default Spinner;
