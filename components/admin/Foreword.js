import React, { useState } from "react";
import dynamic from "next/dynamic"; // Import dynamic from Next.js

const ReactQuill = dynamic(() => import("react-quill"), {
  ssr: false, // Ensure that react-quill is imported only on the client side
});
import "react-quill/dist/quill.snow.css"; // Import the styles

const Foreword = ({ data, onSave }) => {
  const { author } = data[0]
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [title, setTitle] = useState(data[0].title);
  const [paragraphs, setParagraphs] = useState(data[0].paragraphs);
  const [authorName, setAuthorName] = useState(data[0].author.name);
  const [authorPosition, setAuthorPosition] = useState(data[0].author.position);
  const API_URL = process.env.NEXT_PUBLIC_API_URL;

  const handleEditClick = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch(API_URL+"about/foreword", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title: title,
        description: paragraphs,
        author_name: authorName,
        author_position: authorPosition
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
    <div className="w-3/4 mx-auto pt-10">
      <div className="md:col-span-2 xl:col-span-3 flex justify-center items-center">
        <h2 className="text-center text-blue-600 text-xl mb-4" dangerouslySetInnerHTML={{ __html: title }}>
        </h2>

        <button
          className="bg-blue-500 text-white px-5 py-2 mb-3 absolute right-[145px] rounded"
          onClick={handleEditClick}
        >
          Edit
        </button>
      </div>
      <p className="text-justify mb-4 text-white" dangerouslySetInnerHTML={{ __html: paragraphs }}>
      </p>
      <p className="text-left text-white">
        <span dangerouslySetInnerHTML={{ __html: authorName }}></span>
        <span dangerouslySetInnerHTML={{ __html: authorPosition }}></span>
      </p>
      {isModalOpen && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50">
          <div className="fixed top-0 left-0 w-full h-full bg-black opacity-50"></div>
          <div
            className="dark:bg-gray-800 rounded-lg z-10 absolute p-4 w-[700px] shadow-md overflow-y-scroll"
            style={{ maxHeight: 600 }}
          >
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-gray-200 text-sm font-bold mb-2">
                  New Title:
                </label>
                <ReactQuill
                  value={title}
                  onChange={(value) => setTitle(value)}
                  className="quill-editor text-white" // Add a CSS class for styling purposes
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-200 text-sm font-bold mb-2">
                  New Description:
                </label>
                <ReactQuill
                  value={paragraphs}
                  onChange={(value) => setParagraphs(value)}
                  className="quill-editor text-white" // Add a CSS class for styling purposes
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-200 text-sm font-bold mb-2">
                  New Author Name:
                </label>
                <ReactQuill
                  value={authorName}
                  onChange={(value) => setAuthorName(value)}
                  className="quill-editor text-white" // Add a CSS class for styling purposes
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-200 text-sm font-bold mb-2">
                  New Author Position:
                </label>
                <ReactQuill
                  value={authorPosition}
                  onChange={(value) => setAuthorPosition(value)}
                  className="quill-editor text-white" // Add a CSS class for styling purposes
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
  );
};

export default Foreword;
