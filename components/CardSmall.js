import React, { useEffect, useState } from "react";
import { IoCloseOutline } from "react-icons/io5";
import styles from "@/styles/Main.module.scss";
import { API_URL } from "./admin/DataEvents";

const CardSmall = ({ title, imageUrl }) => {
  const [isImagePreviewActive, setImagePreviewActive] = useState(false);
  useEffect(() => {
    if (isImagePreviewActive) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isImagePreviewActive]);
  return (
    <div className={`${styles["card-container"]}`}>
      {isImagePreviewActive ? (
        <div className="fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-75 flex items-center justify-center z-50">
          <img
            src={API_URL + "uploads/" + imageUrl}
            alt={title}
            className="max-w-screen max-h-screen"
          />
          <button
            className="absolute top-4 right-4 text-white text-2xl"
            onClick={() => setImagePreviewActive(false)}
          >
            <IoCloseOutline /> {/* Gunakan ikon IoCloseOutline */}
          </button>
        </div>
      ) : null}
      <div className={`relative flex flex-col items-center`}>
        <div className="flex-grow flex items-center">
          <img
            src={API_URL + "uploads/" + imageUrl}
            alt={title}
            className="w-[300px] h-[175px] mx-auto"
            onClick={() => setImagePreviewActive(!isImagePreviewActive)}
          />
        </div>

        <p className="text-xl text-center bg-transparent md:text-base font-bold py-2">
          {title}
        </p>
      </div>
    </div>
  );
};

export default CardSmall;
