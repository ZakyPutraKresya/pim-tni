import React from 'react';

const VisionSection = ({ title, paragraph }) => {
  return (
    <div className="w-3/4 mx-auto mb-8" style={{marginTop: 75}}>
      <h2 className="text-center text-blue-600 font-bold text-xl mb-4">
        {title}
      </h2>
      <p className="text-justify mb-4">
        {paragraph}
      </p>
    </div>
  );
};

export default VisionSection;
