import React from 'react';
import Card from './Card'; // Pastikan Anda memiliki komponen Card yang sudah dibuat sebelumnya
import Link from 'next/link';

const WhatsNew = ({ data }) => {
  return (
    <div className="container mx-auto my-12 px-12 w-[1000px]">
      <h2 className="text-2xl font-bold mb-4 text-center">What's New</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 md:grid-cols-3 gap-4">
        {data.map((card, index) => (
          <Link href={`/events?id=${btoa(card.id)}`}>
          <Card key={index} title={card.title} imageUrl={card.image} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default WhatsNew;
