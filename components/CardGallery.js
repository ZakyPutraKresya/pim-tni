import React from 'react';
import { FaStar } from 'react-icons/fa';
import styles from '@/styles/Main.module.scss'
import CardSmall from './CardSmall';

const CardGallery = ({ data }) => {
    return (
        <div className="container mx-auto my-12 px-12">
          <h2 className="text-2xl font-bold mb-4 text-center">What's New</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 md:grid-cols-3 gap-4">
            {data.map((card, index) => (
              <CardSmall key={index} title={card.title} imageUrl={card.imageUrl} />
            ))}
          </div>
        </div>
      );
};

export default CardGallery;
