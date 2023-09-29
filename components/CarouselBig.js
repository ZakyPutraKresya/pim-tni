import React, { useEffect, useState } from "react";
import styles from "@/styles/Main.module.scss";
import fetcher from "@/helpers/fetcher";
import { RingLoader } from "react-spinners";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const API_URL = process.env.NEXT_PUBLIC_API_URL;
export const getSlideshowData = async () => {
  const params = {
    method: "GET",
    url: API_URL + "images/slideshow",
    type: "json",
  };
  return await fetcher(params).then((json) => (json ? json : []));
};

const CarouselBig = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [imageData, setImageData] = useState([]);

  useEffect(() => {
    getSlideshowData().then((result) => {
      setImageData(result);
    });
  }, []);

  useEffect(() => {
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");

    const nextSlide = () => {
      setCurrentSlide((prev) => (prev + 1) % 5);
    };

    const prevSlide = () => {
      setCurrentSlide((prev) => (prev - 1 + 5) % 5);
    };

    prevBtn.addEventListener("click", prevSlide);
    nextBtn.addEventListener("click", nextSlide);

    const interval = setInterval(nextSlide, 5000);

    return () => {
      prevBtn.removeEventListener("click", prevSlide);
      nextBtn.removeEventListener("click", nextSlide);
      clearInterval(interval);
    };
  }, []);

  return (
    <div className={`relative ${styles.carousel}`}>
      <div className={styles["carousel-inner"]}>
        {imageData.length === 0 ? (
          <div className="fixed inset-0 flex items-center justify-center z-50 bg-black font-semibold text-xl text-white">
            <RingLoader color="#0894da" size={80} /> Loading...
          </div>
        ) : (
          imageData.map((image, index) => (
            <div
              className={styles["carousel-slide"]}
              key={index}
              style={{
                transform: `translateX(${(index - currentSlide) * 100}%)`,
                display: index === currentSlide ? "block" : "none",
              }}
            >
              <img
                src={API_URL + image.url}
                alt={`Image ${index + 1}`}
                className="w-full h-screen"
              />
            </div>
          ))
        )}
      </div>
      <button
        id="prevBtn"
        className="absolute left-0 top-1/2 transform -translate-y-1/2 px-4 py-2 bg-transparent text-black"
      >
        <IoIosArrowBack />
      </button>
      <button
        id="nextBtn"
        className="absolute right-0 top-1/2 transform -translate-y-1/2 px-4 py-2 bg-transparent text-black"
      >
        <IoIosArrowForward />
      </button>
    </div>
  );
};

export default CarouselBig;
