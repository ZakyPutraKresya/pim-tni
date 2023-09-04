import React, { useEffect, useState } from "react";
import Select from "react-select";
import ExistingImageCard from "./ExistingImageCard";

const CardSlideshow = ({ imageUrl, author, lastUpdate }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newImageUrl, setNewImageUrl] = useState(imageUrl);
  const [activeTab, setActiveTab] = useState("library"); // "library" or "existingList"
  const [activeImageId, setActiveImageId] = useState(null);

  const handleImageClick = (id) => {
    setActiveImageId(id);
  };

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
  const handleSaveChanges = () => {
    setIsModalOpen(false);
  };

  const dummyData = [
    { id: 1, name: "Image 1", url: "/img/png/logo.png" },
    { id: 2, name: "Image 2", url: "/img/png/logo.png" },
    { id: 3, name: "Image 3", url: "/img/png/logo.png" },
    // Tambahkan data gambar lainnya sesuai kebutuhan
  ];

  return (
    <div>
      <div
        className={`max-w-xs rounded overflow-hidden shadow-lg bg-gray-800 cursor-pointer`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={handleCardClick}
      >
        <div className="relative">
          <img src={newImageUrl} className="w-full h-20 object-cover" />
          {isHovered && (
            <div className="absolute inset-0 flex items-center justify-center bg-black opacity-70 transition-opacity">
              <p className="text-white font-semibold text-lg">Click to Edit</p>
            </div>
          )}
        </div>
        <div className="px-3 py-4">
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
            <div
              className="dark:bg-gray-800 rounded-lg z-10 absolute p-4 w-[700px] shadow-md"
              style={{ maxHeight: 600, overflowY: "scroll" }}
            >
              <div className="mb-4">
                <div className="flex justify-center mb-2">
                  <button
                    onClick={() => setActiveTab("library")}
                    className={`px-4 py-2 ${
                      activeTab === "library"
                        ? "bg-blue-500 text-white"
                        : "bg-gray-500 text-gray-200"
                    } rounded-l`}
                  >
                    Library
                  </button>
                  <button
                    onClick={() => setActiveTab("existingList")}
                    className={`px-4 py-2 ${
                      activeTab === "existingList"
                        ? "bg-blue-500 text-white"
                        : "bg-gray-500 text-gray-200"
                    } rounded-r`}
                  >
                    Existing List
                  </button>
                </div>
                {activeTab === "library" && (
                  <>
                    <label className="block text-gray-200 text-sm font-bold mb-2">
                      New Image File:
                    </label>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageChange}
                      className="appearance-none w-full py-2 px-3 text-gray-200 leading-tight focus:outline-none focus:shadow-outline"
                    />
                  </>
                )}
                {activeTab === "existingList" && (
                  <>
                    <label className="block text-gray-200 text-sm font-bold mb-2">
                      List Image:
                    </label>
                    <div className="flex flex-wrap -m-2">
                      {dummyData.map((image) => (
                        <div
                          key={image.id}
                          className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 p-2"
                        >
                          <ExistingImageCard
                            imageUrl={image.url}
                            isActive={activeImageId === image.id}
                            onClick={() => handleImageClick(image.id)}
                          />
                        </div>
                      ))}
                    </div>
                  </>
                )}
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

export default CardSlideshow;
