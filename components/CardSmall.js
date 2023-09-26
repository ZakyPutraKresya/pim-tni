import React from 'react';
import { FaStar } from 'react-icons/fa';
import styles from '@/styles/Main.module.scss'
import { API_URL } from './admin/DataEvents';

const CardSmall = ({ title, imageUrl }) => {
  return (
    <div className={`${styles['card-container']}`}>
      <div className={`relative flex flex-col items-center justify-center`}>
        <img
          src={API_URL + "uploads/" + imageUrl}
          alt={title}
          className="w-full h-max-48"
        />

        <p className="text-xl text-center bg-transparent md:text-base font-bold py-2 ml-2">{title}</p>
      </div>
    </div>
  );
};

export default CardSmall;
