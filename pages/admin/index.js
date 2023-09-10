// pages/admin/index.js
import Card from "@/components/admin/Card";
import CardSlideshow from "@/components/admin/CardSlideshow";
import Navbar from "@/components/admin/Navbar";
import Sidebar from "@/components/admin/Sidebar";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import withAuth from "@/components/Auth/withAuth";
import { RingLoader } from "react-spinners";
import { getSlideshowData } from "@/components/CarouselBig";
import { getWelcomeData } from "..";
import EditWelcome from "@/components/admin/EditWelcome";

const AdminDashboard = () => {
  const router = useRouter();
  const [imageSlideshow, setImageSlideshow] = useState([]);
  const [welcomeData, setWelcomeData] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleEditClick = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleSaveChanges = () => {
    setIsModalOpen(false);
    getWelcomeData().then((result) => {
      setWelcomeData(result[0]);
    });
  };

  const cardData = [
    {
      title: "Card Title 1",
      imageUrl: "/img/jpg/CardTitle.jpeg",
      author: "John Doe",
      lastUpdate: "2023-09-01",
    },
    {
      title: "Card Title 2",
      imageUrl: "/img/jpg/CardTitle.jpeg",
      author: "Jane Smith",
      lastUpdate: "2023-09-02",
    },
    {
      title: "Card Title 3",
      imageUrl: "/img/jpg/CardTitle.jpeg",
      author: "Alice Johnson",
      lastUpdate: "2023-09-03",
    },
    {
      title: "Card Title 4",
      imageUrl: "/img/jpg/CardTitle.jpeg",
      author: "Bob Wilson",
      lastUpdate: "2023-09-04",
    },
    {
      title: "Card Title 5",
      imageUrl: "/img/jpg/CardTitle.jpeg",
      author: "Eve Brown",
      lastUpdate: "2023-09-05",
    },
    {
      title: "Card Title 6",
      imageUrl: "/img/jpg/CardTitle.jpeg",
      author: "Charlie Davis",
      lastUpdate: "2023-09-06",
    },
  ];
  useEffect(() => {
    getSlideshowData().then((result) => {
      setImageSlideshow(result);
    });
    getWelcomeData().then((result) => {
      setWelcomeData(result[0]);
    });
  }, []);

  const handleFormSubmitSlideshow = () => {
    // Form berhasil di-submit, panggil getSlideshowData lagi untuk mendapatkan data slideshow baru
    getSlideshowData().then((result) => {
      setImageSlideshow(result);
    });
  };

  return (
    <div className="text-white min-h-screen">
      <Navbar />
      <Sidebar />
      <div className="h-full ml-14 mt-2 mb-10 md:ml-64">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 p-4 gap-4 text-black dark:text-white">
            <div className="md:col-span-2 xl:col-span-3">
              <h3 className="text-lg font-semibold text-center">Slideshow</h3>
            </div>
          </div>
          <div className="flex overflow-x-auto">
            {imageSlideshow.length === 0 ? (
              <div className="fixed inset-0 flex items-center justify-center z-50 bg-black font-semibold text-xl text-white">
                <RingLoader color="#0894da" size={80} /> Loading...
              </div>
            ) : (
              imageSlideshow.map((card, index) => (
                <div key={index} className="flex-shrink-0 w-1/5 p-4">
                  <CardSlideshow
                    cardData={card}
                    onFormSubmitSuccess={handleFormSubmitSlideshow}
                  />
                </div>
              ))
            )}
          </div>
        </div>
        <div className="container mx-auto px-12 mt-5">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 p-4 gap-4 text-black dark:text-white">
            <div className="md:col-span-2 xl:col-span-3 flex justify-center items-center">
              <h3 className="text-2xl font-bold text-center">Welcome Title</h3>
              <button
            onClick={handleEditClick}
            className="bg-blue-500 text-white px-4 py-2 absolute right-[50px] rounded"
          >
                Edit
              </button>
            </div>
          </div>
          <div className="flex">
            <div className="w-2/3 pr-8">
              <h2 className="text-2xl font-bold mb-4">
                <b>{welcomeData.title}</b>
              </h2>
              <p className="textBlack">{welcomeData.description}</p>
            </div>
            <div className="w-1/3">
              <img
                src={welcomeData.image}
                className="w-full h-auto rounded"
                alt="Image"
              />
            </div>
          </div>
        </div>
        {isModalOpen && (
        <EditWelcome
          welcomeData={welcomeData}
          onSave={handleSaveChanges}
          onClose={handleModalClose}
        />
      )}

        {/* <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 p-4 gap-4 text-black dark:text-white">
            <div className="md:col-span-2 xl:col-span-3">
              <h3 className="text-lg font-semibold text-center">
                What's New List
              </h3>
            </div>
          </div>
          <div className="flex overflow-x-auto">
            {cardData.map((card, index) => (
              <div key={index} className="flex-shrink-0 w-1/6 p-4">
                <Card {...card} />
              </div>
            ))}
          </div>
        </div>
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 p-4 gap-4 text-black dark:text-white">
            <div className="md:col-span-2 xl:col-span-3">
              <h3 className="text-lg font-semibold">What's New List</h3>
            </div>
          </div>
          <div className="flex overflow-x-auto">
            {cardData.map((card, index) => (
              <div key={index} className="flex-shrink-0 w-1/6 p-4">
                <Card {...card} />
              </div>
            ))}
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default withAuth(AdminDashboard);
