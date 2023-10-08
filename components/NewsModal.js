import moment from "moment";
import React, { useEffect, useState } from "react";
import { API_URL } from "./admin/DataEvents";

const NewsModal = ({ isOpen, closeModal, modalData }) => {
  const [imageError, setImageError] = useState(false);

  const handleImageError = () => {
    setImageError(true);
  };
  return (
    <div
      className={`modal ${
        isOpen ? "block" : "hidden"
      } fixed w-full h-full top-0 left-0 flex items-center justify-center bg-gray-700 bg-opacity-75 z-10`}
    >
      {modalData && (
        <div className="fixed top-5 bottom-5 bg-white border rounded p-8 w-[600px] max-h-screen overflow-y-auto ">
          {/* Tambahkan mt-8 (margin top) dan mb-8 (margin bottom) */}
          <h2 className="text-black font-bold text-xl text-center mb-4 uppercase">
            {modalData.title}
          </h2>
          <img
            src={
              !imageError
                ? modalData.image !== undefined
                  ? API_URL + "uploads/" + modalData.image
                  : "/img/png/notfound.png"
                : "/img/png/notfound.png"
            }
            onError={handleImageError} // Handle error when image fails to load
            alt={modalData.title}
            className="w-[300px] h-[175px] mx-auto"
          />
          <p className="titleModalProfile text-center mb-4">
            {moment(modalData.event_date).format("DD MMM YYYY")}
          </p>
          <div className="cardOnCard px-8">
            <p
              className="mt-4"
              dangerouslySetInnerHTML={{
                __html: modalData.description
              }}
            ></p>
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
