import Navbar from "@/components/Navbar";
import React, { useEffect, useState } from "react";
import styles from "@/styles/Main.module.scss";
import CarouselSmall from "@/components/CarouselSmall";
import Breadcrumbs from "@/components/Breadcrumbs";
import Head from "next/head";
import EventsSection from "@/components/EventsSection";
import NewsModal from "@/components/NewsModal";
import Footer from "@/components/Footer";

const Events = () => {
  const [selectedYear, setSelectedYear] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [breadcrumbs, setBreadcrumbs] = useState([
    { text: 'Home', link: '/' },
    { text: 'Events' },
  ]);
  useEffect(() => {
    if (selectedYear) {
      setBreadcrumbs([
        { text: "Home", link: "/" },
        { text: "Events", link: "/events" },
        { text: selectedYear },
      ]);
    } else {
      setBreadcrumbs([{ text: "Home", link: "/" }, { text: "Events" }]);
    }
  }, [selectedYear]);

  const openModal = (event) => {
    setSelectedEvent(event);
    setModalOpen(true);
  };

  const closeModal = () => {
    setSelectedEvent(null);
    setModalOpen(false);
  };

  const carouselImg =
    "/img/jpg/header.jpg";
  const titlePage = "";
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
    {
      id: 4,
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
    setSelectedYear(year);
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
      <EventsSection events={eventsData} onYearClick={handleYearClick} onEventClick={openModal} />
      <NewsModal
        isOpen={modalOpen}
        closeModal={closeModal}
        modalData={selectedEvent}
      />
      <Footer></Footer>
    </div>
  );
};

export default Events;
