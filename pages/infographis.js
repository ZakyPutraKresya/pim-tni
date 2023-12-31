import Navbar from "@/components/Navbar";
import React, { useEffect, useState } from "react";
import styles from "@/styles/Main.module.scss";
import CarouselSmall from "@/components/CarouselSmall";
import Breadcrumbs from "@/components/Breadcrumbs";
import Head from "next/head";
import EventsSection from "@/components/EventsSection";
import NewsModal from "@/components/NewsModal";
import Footer from "@/components/Footer";
import { getEventsData } from "./admin/events";
import { useRouter } from "next/router";
import { getHeaderImage } from "./our-team";
import Infographislist from "@/components/InfographisList";
import { API_URL } from "@/components/admin/DataEvents";
import fetcher from "@/helpers/fetcher";

// Di dalam komponen yang memanggil API infografis
export const getInfographicsData = async () => {
  const params = {
    method: "GET",
    url: API_URL + "infographis",
    type: "json",
  };
  return await fetcher(params).then((json) => (json ? json : []));
};

const Infographis = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [infographics, setInfographics] = useState([]);
  const [breadcrumbs, setBreadcrumbs] = useState([
    { text: "Home", link: "/" },
    { text: "Infographis" },
  ]);
  useEffect(() => {
    getHeaderImage(4).then((result) => {
      setCarouselImg(result);
      getInfographicsData().then((data) => {
        setInfographics(data);
      });
    });
  }, []);
  const [carouselImg, setCarouselImg] = useState(null);
  const titlePage = "";
  return (
    <div className={styles.body}>
      <Head>
        <title>{process.env.NEXT_PUBLIC_NAME} - Infographis</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/img/svg/logo.svg" />
      </Head>
      <Navbar />
      <CarouselSmall headerImg={carouselImg} titlePage={titlePage} />
      <Breadcrumbs data={breadcrumbs} />
      <div className="mx-20">
        <Infographislist data={infographics} />
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Infographis;
