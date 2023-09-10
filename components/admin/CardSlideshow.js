import axios from "axios";
import moment from "moment/moment";
import React, { useState } from "react";
import { Cookies } from "react-cookie";

const CardSlideshow = ({ cardData, onFormSubmitSuccess }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [dataId, setDataId] = useState("");
  const API_URL = process.env.NEXT_PUBLIC_API_URL;
  const cookies = new Cookies();

  const handleCardClick = (e) => {
    setIsModalOpen(true);
    setDataId(e.currentTarget.getAttribute('data-id'))
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const body = new FormData();
    body.append("file", e.target.file.files[0]);
    body.append("author", cookies.get("username"));
    body.append("id", dataId);
    const response = await fetch(API_URL+"images/upload", {
      method: "POST",
      body,
    });

    if (response.ok) {
      const data = await response.json();
      onFormSubmitSuccess();
      setIsModalOpen(false);
      alert(data.message); // Menampilkan pesan dari respons dalam sebuah alert
    } else {
      alert("Terjadi kesalahan saat mengunggah file."); // Menampilkan pesan kesalahan default jika respons tidak berhasil
    }
  };

  return (
    <div>
      <div
        className={`max-w-xs rounded overflow-hidden shadow-lg bg-gray-800 cursor-pointer`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        data-id={cardData.id}
        onClick={handleCardClick}
      >
        <div className="relative">
          <img src={API_URL + cardData.url} className="w-full h-20 object-cover" />
          {isHovered && (
            <div className="absolute inset-0 flex items-center justify-center bg-black opacity-70 transition-opacity">
              <p className="text-white font-semibold text-lg">Click to Edit</p>
            </div>
          )}
        </div>
        <div className="px-3 py-4">
          <p className="text-white text-xs">
            Author: <span className="font-semibold">{cardData.author}</span>
          </p>
          <p className="text-white text-xs">
            Last Update:{" "}
            <span className="font-semibold">
              {moment(cardData.data_time).format("DD-MM-YYYY")}
            </span>
          </p>
        </div>
      </div>
      <div>
        {isModalOpen && (
          <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50">
            <div className="fixed top-0 left-0 w-full h-full bg-black opacity-50"></div>
            <div
              className="dark:bg-gray-800 rounded-lg z-10 absolute p-4 w-[700px] shadow-md"
              style={{ maxHeight: 600 }}
            >
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label className="block text-gray-200 text-sm font-bold mb-2">
                    New Image File:
                  </label>
                  <input
                    type="file"
                    accept="image/*"
                    name="file"
                    className="appearance-none w-full py-2 px-3 text-gray-200 leading-tight focus:outline-none focus:shadow-outline"
                  />
                </div>
                <div className="flex justify-end">
                  <button
                    onClick={handleModalClose}
                    className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded mr-2"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
                  >
                    Save Changes
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CardSlideshow;
