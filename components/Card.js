import React from 'react';
import { FaStar } from 'react-icons/fa';
import styles from '@/styles/Main.module.scss'

const Card = ({ title, imageUrl }) => {
  return (
    <div className={styles['card-container']}>
      <div className={`${styles.card} relative`}>
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full"
        />
        <div className={`${styles['card-content']} flex`}>
          <div className="icon-bg bg-blue-500 text-white flex items-center justify-center w-12 h-12 rounded">
            <FaStar />
          </div>
          <div className="title flex-grow bg-transparent w-12 h-12">
            <p className="text-sm md:text-base mt-3 ml-2 font-bold text-white">{title}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
