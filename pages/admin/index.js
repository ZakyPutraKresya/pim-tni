// pages/admin/index.js
import Card from "@/components/admin/Card";
import CardSlideshow from "@/components/admin/CardSlideshow";
import Navbar from "@/components/admin/Navbar";
import Sidebar from "@/components/admin/Sidebar";
import { useRouter } from "next/router";
import { useEffect } from "react";
import withAuth from "@/components/Auth/withAuth";

const AdminDashboard = () => {
  const router = useRouter();
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
  const cardData2 = [
    {
      imageUrl: "/img/jpg/CardTitle.jpeg",
      author: "John Doe",
      lastUpdate: "2023-09-01",
    },
    {
      imageUrl: "/img/jpg/CardTitle.jpeg",
      author: "Jane Smith",
      lastUpdate: "2023-09-02",
    },
    {
      imageUrl: "/img/jpg/CardTitle.jpeg",
      author: "Alice Johnson",
      lastUpdate: "2023-09-03",
    },
    {
      imageUrl: "/img/jpg/CardTitle.jpeg",
      author: "Bob Wilson",
      lastUpdate: "2023-09-04",
    },
    {
      imageUrl: "/img/jpg/CardTitle.jpeg",
      author: "Eve Brown",
      lastUpdate: "2023-09-05",
    },
  ];

  //   useEffect(() => {
  //     // Lakukan pengalihan (redirect) jika pengguna membuka "/admin"
  //     if (router.pathname === "/admin") {
  //       router.push("/admin/dashboard");
  //     }
  //   }, []);

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
            {cardData2.map((card, index) => (
              <div key={index} className="flex-shrink-0 w-1/6 p-4">
                <CardSlideshow {...card} />
              </div>
            ))}
          </div>
        </div>
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 p-4 gap-4 text-black dark:text-white">
            <div className="md:col-span-2 xl:col-span-3">
              <h3 className="text-lg font-semibold text-center">What's New List</h3>
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
        </div>
      </div>
    </div>
  );
};

export default withAuth(AdminDashboard);
