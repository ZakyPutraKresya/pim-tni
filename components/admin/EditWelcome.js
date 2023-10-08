// components/EditModal.js

import { useState } from "react";
import dynamic from "next/dynamic"; // Import dynamic from Next.js

const ReactQuill = dynamic(() => import("react-quill"), {
  ssr: false, // Ensure that react-quill is imported only on the client side
});
import "react-quill/dist/quill.snow.css"; // Import the styles

const EditWelcome = ({ welcomeData, onSave, onClose }) => {
  const [title, setTitle] = useState(welcomeData.title);
  const [description, setDescription] = useState(welcomeData.description);
  const [image, setImage] = useState(welcomeData.image);
  const API_URL = process.env.NEXT_PUBLIC_API_URL;

  const handleSubmit = async (e) => {
    e.preventDefault();

    const body = new FormData();
    body.append("file", e.target.file.files[0]);
    body.append("title", title);
    body.append("description", description);
    const response = await fetch(API_URL + "dashboard", {
      method: "POST",
      body,
    });

    if (response.status === 200) {
      const data = await response.json();
      onSave();
      alert(data.message); // Menampilkan pesan dari respons dalam sebuah alert
    } else {
      alert("Terjadi kesalahan saat mengunggah file."); // Menampilkan pesan kesalahan default jika respons tidak berhasil
    }
  };

  return (
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
            <ReactQuill
              value={title}
              onChange={(value) => setTitle(value)}
              className="quill-editor" // Add a CSS class for styling purposes
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-200 text-sm font-bold mb-2">
              New Description:
            </label>
            <ReactQuill
              value={description}
              onChange={(value) => setDescription(value)}
              className="quill-editor" // Add a CSS class for styling purposes
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-200 text-sm font-bold mb-2">
              New Image:
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
              onClick={onClose}
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
  );
};

export default EditWelcome;
