import React, { useState } from 'react';

const MissionSection = ({ data, onSave }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const API_URL = process.env.NEXT_PUBLIC_API_URL;
  const [title, setTitle] = useState(data[0].title);
  const [description, setDescription] = useState(data[0].description);

  const handleEditClick = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch(API_URL+"about/mission", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title: title,
        description: description
      })
    });

    if (response.ok) {
      const data = await response.json();
      onSave();
      setIsModalOpen(false);
      alert(data.message); // Menampilkan pesan dari respons dalam sebuah alert
    } else {
      alert("Something went wrong")
    }
  };
  return (
    <div className="w-3/4 mx-auto mb-8" style={{marginTop: 75}}>
      <div className="md:col-span-2 xl:col-span-3 flex justify-center items-center">
        <h2 className="text-center text-blue-600 font-bold text-xl mb-4">
          {title}
        </h2>

        <button
          className="bg-blue-500 text-white px-5 py-2 mb-3 absolute right-[145px] rounded"
          onClick={handleEditClick}
        >
          Edit
        </button>
      </div>
      <p className="text-justify mb-4 text-white">
        {description}
      </p>
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
                  New Title:
                </label>
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="appearance-none w-full py-2 px-3 text-gray-200 leading-tight focus:outline-none focus:shadow-outline bg-gray-600 rounded"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-200 text-sm font-bold mb-2">
                  New Description:
                </label>
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="appearance-none w-full py-2 px-3 text-gray-200 leading-tight focus:outline-none focus:shadow-outline bg-gray-600 rounded"
                  rows="4"
                ></textarea>
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
  );
};

export default MissionSection;
