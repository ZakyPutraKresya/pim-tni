import React from "react";

const ExistingImageCard = ({ imageUrl, isActive, onClick }) => {
  return (
    <div
      className={`max-w-xs rounded overflow-hidden shadow-lg m-2 hover:cursor-pointer ${
        isActive ? "bg-gray-300 bg-opacity-50" : ""
      }`}
      onClick={onClick}
    >
      <img src={imageUrl} alt="Existing Image" className="w-full" />
    </div>
  );
};

export default ExistingImageCard;
