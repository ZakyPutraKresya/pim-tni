import React from 'react';
import { FaStar } from 'react-icons/fa';

const Card = ({ title, imageUrl }) => {
  return (
    <div className="card-container">
      <div className="card relative">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-auto"
        />
        <div className="card-content flex">
          <div className="icon-bg bg-blue-500 text-white flex items-center justify-center w-12 h-12">
            <FaStar />
          </div>
          <div className="title flex-grow bg-transparent w-12 h-12">
            <p className="text-sm md:text-base mt-3 ml-2">{title}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
