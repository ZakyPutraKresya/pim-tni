import React, { useState } from 'react';

const VisionSection = ({ data }) => {
  const { title, description } = data[0];
  return (
    <div className="w-3/4 mx-auto mb-8" style={{marginTop: 75}}>
      <h2 className="text-center text-blue-600 font-bold text-xl mb-4">
        {title}
      </h2>
      <p className="text-justify mb-4">
        {description}
      </p>
    </div>
  );
};

export default VisionSection;
