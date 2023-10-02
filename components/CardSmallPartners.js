import React, { useEffect, useState } from "react";
import styles from "@/styles/Main.module.scss";
import { API_URL } from "./admin/DataEvents";

const CardSmallPartners = ({ name, imageUrl, url }) => {
  return (
    <a className={`${styles["card-container"]} border rounded-md`} href={url} target="_blank">
      <div className={`relative flex flex-col items-center`}>
        <div className="flex-grow flex items-center">
          <img
            src={API_URL + "uploads/" + imageUrl}
            alt={name}
            className="w-[200px]"
          />
        </div>

        <p className="text-xl text-center bg-transparent md:text-base font-bold py-2 ml-2 my-5">
          {name}
        </p>
      </div>
    </a>
  );
};

export default CardSmallPartners;
