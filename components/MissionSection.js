import React, { useState } from 'react';

const MissionSection = ({ data }) => {
  const { title, description } = data[0];
  return (
    <div className="w-3/4 mx-auto mb-8" style={{marginTop: 75}}>
      <h2 className="text-center text-blue-600 text-xl mb-4" dangerouslySetInnerHTML={{ __html: title }}>
      </h2>
      <p className="text-justify mb-4" dangerouslySetInnerHTML={{ __html: description }}>
      </p>
    </div>
  );
};

export default MissionSection;
