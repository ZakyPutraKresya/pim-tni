import React from 'react';
import Card from './Card'; // Pastikan Anda memiliki komponen Card yang sudah dibuat sebelumnya

const WhatsNew = ({ data }) => {
  return (
    <div className="container mx-auto my-12 px-12">
      <h2 className="text-2xl font-bold mb-4 text-center">What's New</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 md:grid-cols-3 gap-4">
        {data.map((card, index) => (
          <Card key={index} title={card.title} imageUrl={card.image} />
        ))}
      </div>
    </div>
  );
};

export default WhatsNew;
