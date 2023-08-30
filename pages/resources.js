import Navbar from "@/components/Navbar";
import React from "react";
import styles from "@/styles/Main.module.scss";
import CarouselSmall from "@/components/CarouselSmall";
import Breadcrumbs from "@/components/Breadcrumbs";
import Head from "next/head";
import CardResources from "@/components/CardResources";

const Resources = () => {
  const carouselImg =
    "https://www.shipspotting.com/photos/middle/7/4/2/3011247.jpg?cb=0";
  const breadcrumbs = [{ text: "Home", link: "/" }, { text: "Resources" }];
  const titlePage = "RESOURCES"
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
      <CardResources />
    </div>
  );
};

export default Resources;
