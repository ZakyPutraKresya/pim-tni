import React, { useEffect } from 'react';

const NewsModal = ({ isOpen, closeModal, modalData }) => {
//   const { title, date, venue, d
  return (
    <div
      className={`modal ${isOpen ? 'block' : 'hidden'} fixed w-full h-full top-0 left-0 flex items-center justify-center bg-gray-700 bg-opacity-75 z-10`}
    >
        {modalData && (
      <div className="bg-white border rounded p-8 w-96">
        <h2 className="text-black font-bold text-xl text-center mb-4">{modalData.title}</h2>
        <p className="titleModalProfile text-center mb-4">{modalData.date}</p>
        <div className="cardOnCard px-8 py-6">
          <h4 className="font-bold">Venue: {modalData.venue}</h4>
          <h4 className="font-bold">{modalData.title}</h4>
          <p className="mt-4">{modalData.description}</p>
          <p className="mt-6">
            <b>Download Event Details Here</b>
          </p>
          <a href={modalData.link} className="text-blue-500">
            Maritime Awareness.pdf
          </a>
        </div>
        <button
          className="bg-blue-500 text-white px-3 py-1 rounded mt-4 float-right"
          onClick={closeModal}
        >
          Close
        </button>
      </div>
        )}
    </div>
  );
};

export default NewsModal;
