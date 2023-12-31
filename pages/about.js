import Navbar from "@/components/Navbar";
import React, { useEffect, useState } from "react";
import styles from "@/styles/Main.module.scss";
import CarouselSmall from "@/components/CarouselSmall";
import Breadcrumbs from "@/components/Breadcrumbs";
import Head from "next/head";
import CardAboutUs from "@/components/CardAboutUs";
import Footer from "@/components/Footer";
import { getHeaderImage } from "./our-team";

const About = () => {
  const [ carouselImg, setCarouselImg ]= useState(null);
  const breadcrumbs = [{ text: "Home", link: "/" }, { text: "About" }];
  const titlePage = "";
  useEffect(() => {
    getHeaderImage(1).then((result) => {
      setCarouselImg(result);
    })
  }, [])
  return (
    <div className={styles.body}>
      <Head>
        <title>{process.env.NEXT_PUBLIC_NAME} - About</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/img/svg/logo.svg" />
      </Head>
      <Navbar />
      <CarouselSmall headerImg={carouselImg} titlePage={titlePage}/>
      <Breadcrumbs data={breadcrumbs} />
      <CardAboutUs />
      <Footer></Footer>
    </div>
  );
};

export default About;
