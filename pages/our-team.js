import Navbar from "@/components/Navbar";
import React from "react";
import styles from "@/styles/Main.module.scss";
import CarouselSmall from "@/components/CarouselSmall";
import Breadcrumbs from "@/components/Breadcrumbs";
import Head from "next/head";
import Foreword from "@/components/Foreword";
import AboutSection from "@/components/AboutSection";
import MissionSection from "@/components/MissionSection";
import VisionSection from "@/components/VIsionSection";
import OurNewsSection from "@/components/OurNewsSection";
import ListOurTeam from "@/components/ListOurTeam";

const OurTeam = () => {
  const carouselImg =
    "https://www.shipspotting.com/photos/middle/7/4/2/3011247.jpg?cb=0";
  const breadcrumbs = [{ text: "Home", link: "/" }, { text: "Our Team" }];
  const titlePage = "OUR TEAM"
  const data = [
    {imageUrl: "https://www.ifc.org.sg/ifc2web/images/refresh/RSN/IFCH01.png", personName: "LTC Lester Yong", personDesc: "LTC Lester Yong assumed Head IFC since 28<sup>th</sup> Sep 2020. He graduated with a Master of Arts in Security Studies and received the International Student Award for Excellence in Regional Or Security Studies. LTC Lester Yong assumed Head IFC since 28<sup>th</sup> Sep 2020. He graduated with a Master of Arts in Security Studies and received the International Student Award for Excellence in Regional Or Security Studies. LTC Lester Yong assumed Head IFC since 28<sup>th</sup> Sep 2020. He graduated with a Master of Arts in Security Studies and received the International Student Award for Excellence in Regional Or Security Studies."},
    {imageUrl: "https://www.ifc.org.sg/ifc2web/images/refresh/RSN/IFCH01.png", personName: "LTC Lester Yong", personDesc: "LTC Lester Yong assumed Head IFC since 28<sup>th</sup> Sep 2020. He graduated with a Master of Arts in Security Studies and received the International Student Award for Excellence in Regional Or Security Studies."},
    {imageUrl: "https://www.ifc.org.sg/ifc2web/images/refresh/RSN/IFCH01.png", personName: "LTC Lester Yong", personDesc: "LTC Lester Yong assumed Head IFC since 28<sup>th</sup> Sep 2020. He graduated with a Master of Arts in Security Studies and received the International Student Award for Excellence in Regional Or Security Studies."},
    {imageUrl: "https://www.ifc.org.sg/ifc2web/images/refresh/RSN/IFCH01.png", personName: "LTC Lester Yong", personDesc: "LTC Lester Yong assumed Head IFC since 28<sup>th</sup> Sep 2020. He graduated with a Master of Arts in Security Studies and received the International Student Award for Excellence in Regional Or Security Studies."},
    {imageUrl: "https://www.ifc.org.sg/ifc2web/images/refresh/RSN/IFCH01.png", personName: "LTC Lester Yong", personDesc: "LTC Lester Yong assumed Head IFC since 28<sup>th</sup> Sep 2020. He graduated with a Master of Arts in Security Studies and received the International Student Award for Excellence in Regional Or Security Studies."},
    {imageUrl: "https://www.ifc.org.sg/ifc2web/images/refresh/RSN/IFCH01.png", personName: "LTC Lester Yong", personDesc: "LTC Lester Yong assumed Head IFC since 28<sup>th</sup> Sep 2020. He graduated with a Master of Arts in Security Studies and received the International Student Award for Excellence in Regional Or Security Studies."},
  ]
  return (
    <div className={styles.body}>
      <Head>
        <title>{process.env.NEXT_PUBLIC_NAME} - Our Team</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/img/svg/logo.svg" />
      </Head>
      <Navbar />
      <CarouselSmall headerImg={carouselImg} titlePage={titlePage} />
      <Breadcrumbs data={breadcrumbs} />
      <div className="mx-auto">
        <br />
        <br />
        <br />
        <div className="text-3xl font-semibold text-center text-gray-500">Pusinfomar TNI Core team</div>
        <div className="flex items-center justify-center mt-16">
          <img src="https://www.ifc.org.sg/ifc2web/images/refresh/RSN/IFCChart.png" style={{ width: 1000 }} alt="Logo" />
        </div>
        <ListOurTeam listData={data} />
      </div>
    </div>
  );
};

export default OurTeam;
