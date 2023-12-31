import withAuth from "@/components/Auth/withAuth";
import Navbar from "@/components/admin/Navbar";
import Sidebar from "@/components/admin/Sidebar";
import fetcher from "@/helpers/fetcher";
import styles from "@/styles/Main.module.scss";
import Head from "next/head";
import React, { useEffect, useState } from "react";
import { RingLoader } from "react-spinners";
import { getInfographicsData } from "../infographis";
import DataInfographis from "@/components/admin/DataInfographis";

const Gallery = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getInfographicsData().then((data) => {
      setData(data);
      setIsLoading(false);
    });
  }, []);

  const handleSaveListChanges = () => {
    getInfographicsData().then((result) => {
      setData(result);
    });
  };
  return (
    <div className={styles.body}>
      <Head>
        <title>{process.env.NEXT_PUBLIC_NAME}</title>
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
          <Sidebar />
          <div className="bg-gray-900 pt-10 ml-52">
            <DataInfographis data={data} onSave={handleSaveListChanges} />
          </div>
        </>
      )}
    </div>
  );
};

export default withAuth(Gallery);
