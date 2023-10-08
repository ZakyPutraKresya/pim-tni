import React from 'react';

const IntroSection = ({ title, description, image }) => {
  const API_URL = process.env.NEXT_PUBLIC_API_URL;
  return (
      <div className="container mx-auto my-12 px-12" style={{marginTop: 150}}>
      <div className="flex">
        <div className="w-2/3 pr-8">
          <h2 className="text-2xl font-bold mb-4">
            <b dangerouslySetInnerHTML={{ __html: title }}></b>
          </h2>
          <p className="textBlack" dangerouslySetInnerHTML={{ __html: description }}></p>
        </div>
        <div className="w-1/3">
          <img src={API_URL + image} className="w-full h-auto" alt="Image" />
        </div>
      </div>
    </div>
  );
};

export default IntroSection;
