import withAuth from "@/components/Auth/withAuth";
import AboutSection from "@/components/admin/AboutSection";
import Foreword from "@/components/admin/Foreword";
import MissionSection from "@/components/admin/MissionSection";
import Navbar from "@/components/admin/Navbar";
import Sidebar from "@/components/admin/Sidebar";
import VisionSection from "@/components/admin/VIsionSection";
import fetcher from "@/helpers/fetcher";
import styles from "@/styles/Main.module.scss";
import { useEffect, useState } from "react";
import { RingLoader } from "react-spinners";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const getForewordData = async () => {
  const params = {
    method: "GET",
    url: API_URL + "about/foreword",
    type: "json",
  };
  return await fetcher(params).then((json) => (json ? json : []));
};

const About = () => {
  const [forewordData, setForewordData] = useState([]);

  useEffect(() => {
    getForewordData().then((result) => {
      setForewordData(result);
    });
  }, []);

  const handleSaveForeword = () => {
    getForewordData().then((result) => {
      setForewordData(result);
    });
  };

  const aboutData = {
    title: "About PusinfomarTNI",
    paragraphs:
      "Established on 27th April 2009, the Information Fusion Centre (IFC) is a regional Maritime Security (MARSEC) centre situated at the Changi Command and Control Centre (CC2C) and hosted by the Republic of Singapore Navy (RSN). \n The IFC aims to facilitate information-sharing and collaboration between its partners to enhance MARSEC. Over the last decade, the IFC has been at the forefront of providing actionable information to cue responses by regional and international navies, coast guards and other maritime agencies to deal with the full range of MARSEC threats and incidents. This includes piracy, sea robbery, maritime terrorism, contraband smuggling, illegal fishing and irregular human migration.",
  };
  const missionData = {
    title: "Our Mission",
    paragraph:
      "The IFC is to collect and sense-make relevant White Shipping and maritime information in its Area of Interest, in order to produce accurate, reliable, impartial and actionable MARSEC information for related OPCENs and the shipping community, to achieve Safe and Secure Seas for All.",
  };
  const visionData = {
    title: "Our Vision",
    paragraph:
      "To be the centre of excellence for fusion and exchange of actionable maritime security information in the IFC's Area of Interest",
  };
  const newsData = {
    title: "Our Journey",
    newsItems: [
      {
        year: 1,
        imageSrc: "https://via.placeholder.com/400x200", // Dummy image URL for year 1
        explanation: "Explanation for year 1...",
      },
      {
        year: 2,
        imageSrc: "https://via.placeholder.com/400x200", // Dummy image URL for year 2
        explanation: "Explanation for year 2...",
      },
      // Add more news items as needed
    ],
  };
  return (
    <div className={styles.body}>
      {forewordData.length === 0 ? (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black font-semibold text-xl text-white">
          <RingLoader color="#0894da" size={80} /> Loading...
        </div>
      ) : (
        <>
          <Navbar />
          <Sidebar />
          <div className="ml-52 bg-gray-900">
            <Foreword data={forewordData} onSave={handleSaveForeword} />
            <AboutSection {...aboutData} />
            <MissionSection {...missionData} />
            <VisionSection {...visionData} />
          </div>
        </>
      )}
    </div>
  );
};

export default withAuth(About);