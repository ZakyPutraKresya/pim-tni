import React from 'react';
import { FaStar } from 'react-icons/fa';
import styles from '@/styles/Main.module.scss'

const CardSmall = ({ title, imageUrl }) => {
  return (
    <div className={styles['card-container']}>
      <div className={`relative`}>
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-auto"
        />

        <p className="text-xl text-center bg-transparent md:text-base font-bold py-2 ml-2">{title}</p>
      </div>
    </div>
  );
};

export default CardSmall;
