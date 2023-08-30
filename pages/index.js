import React from 'react';
import Head from 'next/head';
import useStore from '@/store/useStore';
import styles from '@/styles/Main.module.scss'
import Navbar from '@/components/Navbar';
import CarouselBig from '@/components/CarouselBig';
import WhatsNew from '@/components/WhatsNew';
import IntroSection from '@/components/IntroSection';
import QuickLinks from '@/components/QuickLinks';

const Home = () => {
  const cardData = [
    { title: 'Card Title 1', imageUrl: 'https://photos.marinetraffic.com/ais/showphoto.aspx?shipid=726761' },
    { title: 'Card Title 2', imageUrl: 'https://photos.marinetraffic.com/ais/showphoto.aspx?shipid=726761' },
    { title: 'Card Title 3', imageUrl: 'https://photos.marinetraffic.com/ais/showphoto.aspx?shipid=726761' },
    { title: 'Card Title 3', imageUrl: 'https://photos.marinetraffic.com/ais/showphoto.aspx?shipid=726761' },
    { title: 'Card Title 3', imageUrl: 'https://photos.marinetraffic.com/ais/showphoto.aspx?shipid=726761' },
    { title: 'Card Title 3', imageUrl: 'https://photos.marinetraffic.com/ais/showphoto.aspx?shipid=726761' },
    // ... Add more card data here ...
  ];

  return (
    <div className={styles.body}>
      <Head>
        <title>{process.env.NEXT_PUBLIC_NAME}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/img/svg/logo.svg" />
      </Head>

      {/* Your HTML content */}
      {/* ... (Paste your HTML content here) */}
      <Navbar></Navbar>
      <CarouselBig></CarouselBig>
      <WhatsNew data={cardData}></WhatsNew>
      <IntroSection
        title="Welcome to Pusinfomar TNI"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vitae arcu bibendum, ultricies lectus non, interdum tortor. Suspendisse potenti. Nulla facilisi. Sed eget scelerisque ex. Find out more about us"
        imageUrl="https://www.ifc.org.sg/ifc2web/Scripts/public/common/images/contactUS/HomePageImage.jpg"
      />
      <QuickLinks></QuickLinks>
    </div>
  );
};

export default Home;
