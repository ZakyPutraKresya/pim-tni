import Navbar from "@/components/Navbar";
import React, { useEffect, useState } from "react";
import styles from "@/styles/Main.module.scss";
import CarouselSmall from "@/components/CarouselSmall";
import Breadcrumbs from "@/components/Breadcrumbs";
import Head from "next/head";
import CardGallery from "@/components/CardGallery";
import Footer from "@/components/Footer";
import { getGalleryData } from "./admin/gallery";
import { RingLoader } from "react-spinners";
import { getHeaderImage } from "./our-team";

const Gallery = () => {
  const titlePage = "";
  const [ carouselImg, setCarouselImg ] = useState(null);
  const breadcrumbs = [{ text: "Home", link: "/" }, { text: "Gallery" }];
  const [cardData, setCardData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getGalleryData().then((data) => {
      setCardData(data);
      getHeaderImage(6).then((result) => {
        setCarouselImg(result)
        setIsLoading(false);
      })
    });
  }, []);

  return (
    <div className={styles.body}>
      <Head>
        <title>{process.env.NEXT_PUBLIC_NAME} - Gallery</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/img/svg/logo.svg" />
      </Head>
      {isLoading ? (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black font-semibold text-xl text-white">
          <RingLoader color="#0894da" size={80} /> Loading...
        </div>
      ) : (
        <>
          <Navbar />
          <CarouselSmall headerImg={carouselImg} titlePage={titlePage} />
          <Breadcrumbs data={breadcrumbs} />
          <CardGallery data={cardData} />
          <Footer></Footer>
        </>
      )}
    </div>
  );
};

export default Gallery;
