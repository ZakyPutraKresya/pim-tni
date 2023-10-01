import Navbar from "@/components/Navbar";
import React, { useEffect, useState } from "react";
import styles from "@/styles/Main.module.scss";
import CarouselSmall from "@/components/CarouselSmall";
import Breadcrumbs from "@/components/Breadcrumbs";
import Head from "next/head";
import NewsModal from "@/components/NewsModal";
import Footer from "@/components/Footer";
import ReportSection from "@/components/ReportSection";
import { getHeaderImage } from "./our-team";

const Report = () => {
  const [selectedType, setselectedType] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [breadcrumbs, setBreadcrumbs] = useState([
    { text: 'Home', link: '/' },
    { text: 'Resources', link: '/resources' },
    { text: 'Report' },
  ]);
  useEffect(() => {
    if (selectedType) {
      setBreadcrumbs([
        { text: "Home", link: "/" },
        { text: "Resources", link: "/resources" },
        { text: "Report", link: "/report" },
        { text: selectedType },
      ]);
    } else {
      setBreadcrumbs([{ text: "Home", link: "/" }, { text: "Resources", link: "/resources" }, { text: "Report" }]);
    }
  }, [selectedType]);

  const openModal = (event) => {
    setSelectedEvent(event);
    setModalOpen(true);
  };

  const closeModal = () => {
    setSelectedEvent(null);
    setModalOpen(false);
  };

  useEffect(() => {
    getHeaderImage(3).then((result) => {
      setCarouselImg(result)
    })
  }, [])
  const [ carouselImg, setCarouselImg ] = useState(null); 
  const titlePage = "REPORT";
  const eventsData = [
    {
      id: 1,
      title: "IFC Maritime Week 2023",
      venue: "Malacca Strait",
      date: "2023-08-21 to 2023-08-25",
      description: "To reinforce the best MARSEC practices...",
      link: "/IFC2Web/Events/IFC%20Maritime%20Week/Maritime%20Awareness.pdf",
      year: 2023,
    },
    {
      id: 2,
      title: "IFC Maritime Week 2023",
      venue: "Malacca Strait",
      date: "2023-08-21 to 2023-08-25",
      description: "To reinforce the best MARSEC practices...",
      link: "/IFC2Web/Events/IFC%20Maritime%20Week/Maritime%20Awareness.pdf",
      year: 2023,
    },
    {
      id: 3,
      title: "IFC Maritime Week 2022",
      venue: "Malacca Strait",
      date: "2022-08-21 to 2022-08-25",
      description: "To reinforce the best MARSEC practices...",
      link: "/IFC2Web/Events/IFC%20Maritime%20Week/Maritime%20Awareness.pdf",
      year: 2022,
    },
    // Add more events with different years here
  ];
  const handleYearClick = (year) => {
    setselectedType(year);
  };
  return (
    <div className={styles.body}>
      <Head>
        <title>{process.env.NEXT_PUBLIC_NAME} - Events</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/img/svg/logo.svg" />
      </Head>
      <Navbar />
      <CarouselSmall headerImg={carouselImg} titlePage={titlePage} />
      <Breadcrumbs data={breadcrumbs} />
      <ReportSection events={eventsData}/>
      <NewsModal
        isOpen={modalOpen}
        closeModal={closeModal}
        modalData={selectedEvent}
      />
      <Footer></Footer>
    </div>
  );
};

export default Report;
