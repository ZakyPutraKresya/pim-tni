import React, { useEffect, useState } from 'react';
import styles from '@/styles/Main.module.scss'
import fetcher from '@/helpers/fetcher';

const images = [
  '/img/png/slideshow1.png',
  '/img/png/slideshow2.jpg',
  '/img/png/slideshow3.png',
];

export const getSlideshowData = async () => {
  const params = {
    method: "GET",
    url: "http://localhost:3210/api/test",
    type: "json",
  };
  return await fetcher(params).then(json => (json?.data ? json.data : []));
};


const CarouselBig = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [imageData, setImageData] = useState([]);

  
  useEffect(() => {
    getSlideshowData().then(result => {
      setImageData(result);
    });
  }, []);

  useEffect(() => {
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');

    const nextSlide = () => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    };

    const prevSlide = () => {
      setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
    };

    prevBtn.addEventListener('click', prevSlide);
    nextBtn.addEventListener('click', nextSlide);

    const interval = setInterval(nextSlide, 5000);

    return () => {
      prevBtn.removeEventListener('click', prevSlide);
      nextBtn.removeEventListener('click', nextSlide);
      clearInterval(interval);
    };
  }, []);

  return (
    <div className={`relative ${styles.carousel}`}>
      <div className={styles['carousel-inner']}>
        {images.map((image, index) => (
          <div
            className={styles['carousel-slide']}
            key={index}
            style={{
              transform: `translateX(${(index - currentSlide) * 100}%)`,
              display: index === currentSlide ? 'block' : 'none',
            }}
          >
            <img src={image} alt={`Image ${index + 1}`} className="w-full h-screen" />
          </div>
        ))}
      </div>
      <button id="prevBtn" className="absolute left-0 top-1/2 transform -translate-y-1/2 px-4 py-2 bg-gray-800 text-white">
        ←
      </button>
      <button id="nextBtn" className="absolute right-0 top-1/2 transform -translate-y-1/2 px-4 py-2 bg-gray-800 text-white">
        →
      </button>
    </div>
  );
};

export default CarouselBig;
