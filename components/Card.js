import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import styles from "@/styles/Main.module.scss";
import { API_URL } from "./admin/DataEvents";

const Card = ({ title, imageUrl }) => {
  const [imageError, setImageError] = useState(false);

  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <div className={`${styles["card-container"]} h-[200px]`}>
      <div className={`${styles.card} relative`}>
        <img
          src={
            !imageError
              ? imageUrl !== undefined
                ? API_URL + "uploads/" + imageUrl
                : "/img/png/notfound.png"
              : "/img/png/notfound.png"
          }
          alt={title}
          className="w-full h-full"
          onError={handleImageError} // Handle error when image fails to load
        />
        <div className={`${styles["card-content"]} flex`}>
          <div className="icon-bg bg-blue-500 text-white flex items-center justify-center w-[400px] h-12">
            <FaStar className="ml-3" />
            <div className="title flex-grow bg-transparent h-12 ml-2">
              <p
                className="text-sm md:text-base mt-3 ml-2 capitalize font-light text-white whitespace-nowrap text-clip w-[235px] overflow-hidden"
                title={title}
              >
                {title}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
