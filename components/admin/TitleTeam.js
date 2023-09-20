import Navbar from "@/components/admin/Navbar";
import Sidebar from "@/components/admin/Sidebar";
import fetcher from "@/helpers/fetcher";
import styles from "@/styles/Main.module.scss";
import Head from "next/head";
import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { RingLoader } from "react-spinners";
const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const getListTeam = async () => {
  const params = {
    method: "GET",
    url: API_URL + "team/list",
    type: "json",
  };
  return await fetcher(params).then((json) => (json ? json : []));
};
export const getHeaderTeam = async () => {
  const params = {
    method: "GET",
    url: API_URL + "team/header",
    type: "json",
  };
  return await fetcher(params).then((json) => (json ? json : []));
};

const TitleTeam = ({ data, onSave }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [title, setTitle] = useState(data[0].title);

    const handleEditClick = () => {
      setIsModalOpen(true);
    };
  
    const handleModalClose = () => {
      setIsModalOpen(false);
    };
    
    const handleSubmit = async (e) => {
      e.preventDefault();
      const body = new FormData();
      body.append("title", e.target.title.value);
      if(e.target.file.files.length > 0){
          body.append("file", e.target.file.files[0]);
      }
      const response = await fetch(API_URL+"team/createTitle", {
        method: "POST",
        body
      });
  
      if (response.ok) {
        const data = await response.json();
        setIsModalOpen(false);
        alert(data.message); // Menampilkan pesan dari respons dalam sebuah alert
        onSave();
      } else {
        alert("Something went wrong")
      }
    };
    return (
    <div>
      <div className="md:col-span-2 xl:col-span-3 flex justify-center items-center">
        <h1 className="text-center text-white font-bold text-xl mb-4">
            {title}
        </h1>

        <button
          className="bg-blue-500 text-white px-5 py-2 mb-3 absolute right-[230px] rounded"
          onClick={handleEditClick}
        >
          Edit
        </button>
      </div>
      <div className="flex items-center justify-center mt-2">
              <img
                src={API_URL + "uploads/" + data[0].image}
                style={{ width: 700 }}
                alt="Logo"
              />
            </div>
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
                      name="title"
                      onChange={(e) => setTitle(e.target.value)}
                      className="appearance-none w-full py-2 px-3 text-gray-200 leading-tight focus:outline-none focus:shadow-outline bg-gray-600 rounded"
                    />
                  </div>
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
  );
};

export default TitleTeam;
