import React, { useEffect, useState } from "react";
import Select from "react-select";

const Card = ({ title, imageUrl, author, lastUpdate }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newTitle, setNewTitle] = useState(title);
  const [newImageUrl, setNewImageUrl] = useState(imageUrl);
  const [selectedHref, setSelectedHref] = useState(""); // State untuk tautan yang dipilih
  const [selectedOption, setSelectedOption] = useState(null);

  const hrefOptions = [
    { label: "Option 1", value: "https://example.com/option1" },
    { label: "Option 2", value: "https://example.com/option2" },
    { label: "Option 3", value: "https://example.com/option3" },
  ];

  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      backgroundColor: state.isFocused ? "#374151" : "#374151",
      border: "none",
      color: "white",
    }),
    menu: (provided) => ({
      ...provided,
      backgroundColor: "#1f2937",
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isFocused ? "#1f2937" : "transparent",
      color: state.isSelected ? "white" : "white",
      "&:hover": {
        backgroundColor: "#4B5563", // Warna latar belakang saat dihover
      },
    }),
    singleValue: (provided) => ({
        ...provided,
        color: "white", // Warna teks untuk opsi yang dipilih
      }),
  };
  

  const handleCardClick = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setNewImageUrl(URL.createObjectURL(file));
    }
  };
  const handleHrefChange = (e) => {
    setSelectedHref(e.target.value);
  };

  const handleSaveChanges = () => {
    // Menyimpan perubahan judul, gambar, dan tautan
    // Anda bisa menambahkan logika penyimpanan sesuai kebutuhan Anda di sini

    // Setelah menyimpan, tutup modal
    setIsModalOpen(false);
  };

  return (
    <div>
      <div
        className={`max-w-xs rounded overflow-hidden shadow-lg bg-gray-800 cursor-pointer`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={handleCardClick}
      >
        <div className="relative">
          <img
            src={newImageUrl}
            alt={title}
            className="w-full h-20 object-cover"
          />
          {isHovered && (
            <div className="absolute inset-0 flex items-center justify-center bg-black opacity-70 transition-opacity">
              <p className="text-white font-semibold text-lg">Click to Edit</p>
            </div>
          )}
        </div>
        <div className="px-3 py-4">
          <div className="font-bold text-md text-white mb-2">{title}</div>
          <p className="text-white text-xs">
            Author: <span className="font-semibold">{author}</span>
          </p>
          <p className="text-white text-xs">
            Last Update: <span className="font-semibold">{lastUpdate}</span>
          </p>
        </div>
      </div>
      <div>
        {isModalOpen && (
          <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50">
            <div className="fixed top-0 left-0 w-full h-full bg-black opacity-50"></div>
            <div className="dark:bg-gray-800 rounded-lg z-10 absolute p-4 max-w-md shadow-md">
              <div className="mb-4">
                <label className="block text-gray-200 text-sm font-bold mb-2">
                  New Image File:
                </label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="appearance-none w-full py-2 px-3 text-gray-200 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-200 text-sm font-bold mb-2">
                  New Title:
                </label>
                <input
                  type="text"
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                  className="appearance-none w-full dark:bg-gray-700 py-2 px-3 text-gray-200 rounded leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-200 text-sm font-bold mb-2">
                  New Href (Link):
                </label>
                <Select
                options={hrefOptions}
                className="react-select-container"
                classNamePrefix="react-select"
                onChange={(selected) => setSelectedOption(selected)}
                value={selectedOption}
                styles={customStyles}
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
                  onClick={handleSaveChanges}
                  className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
                >
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;
