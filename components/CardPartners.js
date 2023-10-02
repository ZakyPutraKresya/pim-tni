import React from 'react';
import CardSmallPartners from './CardSmallPartners';

const CardPartners = ({ data }) => {
    return (
        <div className="container mx-auto my-12 px-12">
          <h2 className="text-2xl font-bold mb-4 text-center">Partners Pusinfomar TNI</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 md:grid-cols-3 gap-4 mt-10 bg-gray-100 rounded-md pt-10">
            {data.map((card, index) => (
              <CardSmallPartners key={index} name={card.name} imageUrl={card.image} url={card.url} />
            ))}
          </div>
        </div>
      );
};

export default CardPartners;
