import React from 'react';

const IntroSection = ({ title, content, imageUrl }) => {
  return (
      <div className="container mx-auto my-12 px-12" style={{marginTop: 150}}>
      <div className="flex">
        <div className="w-2/3 pr-8">
          <h2 className="text-2xl font-bold mb-4">
            <b>{title}</b>
          </h2>
          <p className="textBlack">{content}</p>
        </div>
        <div className="w-1/3">
          <img src={imageUrl} className="w-full h-auto" alt="Image" />
        </div>
      </div>
    </div>
  );
};

export default IntroSection;
