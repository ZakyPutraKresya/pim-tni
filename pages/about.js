import Navbar from "@/components/Navbar";
import React from "react";
import styles from "@/styles/Main.module.scss";
import CarouselSmall from "@/components/CarouselSmall";
import Breadcrumbs from "@/components/Breadcrumbs";
import Head from "next/head";
import CardAboutUs from "@/components/CardAboutUs";
import Footer from "@/components/Footer";

const About = () => {
  const carouselImg =
    "/img/jpg/header.jpg";
  const breadcrumbs = [{ text: "Home", link: "/" }, { text: "About" }];
  const titlePage = "";
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
