import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { FaArchive, FaCog, FaFileArchive, FaImages, FaInfoCircle, FaNewspaper, FaUsers } from "react-icons/fa";
import { IoEarth } from "react-icons/io5";

const Sidebar = () => {
  const router = useRouter();
  return (
    <div className="fixed flex flex-col top-14 left-0 w-14 hover:w-64 md:w-64 bg-blue-900 dark:bg-gray-900 h-full text-white transition-all duration-300 border-none z-10 sidebar">
      <div className="overflow-y-auto overflow-x-hidden flex flex-col justify-between flex-grow">
        <ul className="flex flex-col py-4 space-y-1">
          <li className="px-5 hidden md:block">
            <div className="flex flex-row items-center h-8">
              <div className="text-sm font-light tracking-wide text-gray-400 uppercase">
                Main
              </div>
            </div>
          </li>
          <li>
            <Link href="/admin" legacyBehavior>
              <a
                className={`relative flex flex-row items-center h-11 focus:outline-none hover:bg-blue-800 text-white-600 hover:text-white-800 border-l-4 ${
                  router.pathname === "/admin"
                    ? "border-blue-500"
                    : "border-transparent"
                } dark:hover:border-gray-800 pr-6`}
              >
                <span className="inline-flex justify-center items-center ml-4">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      stroke-width="2"
                      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                    ></path>
                  </svg>
                </span>
                <span className="ml-2 text-sm tracking-wide truncate">
                  Dashboard
                </span>
              </a>
            </Link>
          </li>
          <li>
            <Link href="/admin/about" legacyBehavior>
              <a
                className={`relative flex flex-row items-center h-11 focus:outline-none hover:bg-blue-800 text-white-600 hover:text-white-800 border-l-4 ${
                  router.pathname === "/admin/about"
                    ? "border-blue-500"
                    : "border-transparent"
                } dark:hover:border-gray-800 pr-6`}
              >
                <span className="inline-flex justify-center items-center ml-4">
                  <FaFileArchive />
                </span>
                <span className="ml-2 text-sm tracking-wide truncate">
                  About
                </span>
              </a>
            </Link>
          </li>
          <li>
            <Link href="/admin/our-team" legacyBehavior>
              <a
                className={`relative flex flex-row items-center h-11 focus:outline-none hover:bg-blue-800 text-white-600 hover:text-white-800 border-l-4 ${
                  router.pathname === "/admin/our-team"
                    ? "border-blue-500"
                    : "border-transparent"
                } dark:hover:border-gray-800 pr-6`}
              >
                <span className="inline-flex justify-center items-center ml-4">
                  <FaUsers />
                </span>
                <span className="ml-2 text-sm tracking-wide truncate">
                  Our Team
                </span>
              </a>
            </Link>
          </li>
          <li>
            <Link href="/admin/events" legacyBehavior>
              <a
                className={`relative flex flex-row items-center h-11 focus:outline-none hover:bg-blue-800 text-white-600 hover:text-white-800 border-l-4 ${
                  router.pathname === "/admin/events"
                    ? "border-blue-500"
                    : "border-transparent"
                } dark:hover:border-gray-800 pr-6`}
              >
                <span className="inline-flex justify-center items-center ml-4">
                  <FaNewspaper />
                </span>
                <span className="ml-2 text-sm tracking-wide truncate">
                  Events
                </span>
              </a>
            </Link>
          </li>
          <li>
            <Link href="/admin/gallery" legacyBehavior>
              <a
                className={`relative flex flex-row items-center h-11 focus:outline-none hover:bg-blue-800 text-white-600 hover:text-white-800 border-l-4 ${
                  router.pathname === "/admin/gallery"
                    ? "border-blue-500"
                    : "border-transparent"
                } dark:hover:border-gray-800 pr-6`}
              >
                <span className="inline-flex justify-center items-center ml-4">
                  <FaImages />
                </span>
                <span className="ml-2 text-sm tracking-wide truncate">
                  Gallery
                </span>
              </a>
            </Link>
          </li>
          <li>
            <Link href="/admin/infographis" legacyBehavior>
              <a
                className={`relative flex flex-row items-center h-11 focus:outline-none hover:bg-blue-800 text-white-600 hover:text-white-800 border-l-4 ${
                  router.pathname === "/admin/infographis"
                    ? "border-blue-500"
                    : "border-transparent"
                } dark:hover:border-gray-800 pr-6`}
              >
                <span className="inline-flex justify-center items-center ml-4">
                  <FaArchive />
                </span>
                <span className="ml-2 text-sm tracking-wide truncate">
                  Infographis
                </span>
              </a>
            </Link>
          </li>
          <li>
            <Link href="/admin/partners" legacyBehavior>
              <a
                className={`relative flex flex-row items-center h-11 focus:outline-none hover:bg-blue-800 text-white-600 hover:text-white-800 border-l-4 ${
                  router.pathname === "/admin/partners"
                    ? "border-blue-500"
                    : "border-transparent"
                } dark:hover:border-gray-800 pr-6`}
              >
                <span className="inline-flex justify-center items-center ml-4">
                  <IoEarth />
                </span>
                <span className="ml-2 text-sm tracking-wide truncate">
                  Partners
                </span>
              </a>
            </Link>
          </li>
          <li className="px-5 hidden md:block">
            <div className="flex flex-row items-center mt-5 h-8">
              <div className="text-sm font-light tracking-wide text-gray-400 uppercase">
                Settings
              </div>
            </div>
          </li>
          <li>
            <Link href="/admin/profile" legacyBehavior>
              <a
                className={`relative flex flex-row items-center h-11 focus:outline-none hover:bg-blue-800 text-white-600 hover:text-white-800 border-l-4 ${
                  router.pathname === "/admin/profile"
                    ? "border-blue-500"
                    : "border-transparent"
                } dark:hover:border-gray-800 pr-6`}
              >
                <span className="inline-flex justify-center items-center ml-4">
                  <FaInfoCircle />
                </span>
                <span className="ml-2 text-sm tracking-wide truncate">
                  Profile
                </span>
              </a>
            </Link>
          </li>
          <li>
            <Link href="/admin/settings" legacyBehavior>
              <a
                className={`relative flex flex-row items-center h-11 focus:outline-none hover:bg-blue-800 text-white-600 hover:text-white-800 border-l-4 ${
                  router.pathname === "/admin/settings"
                    ? "border-blue-500"
                    : "border-transparent"
                } dark:hover:border-gray-800 pr-6`}
              >
                <span className="inline-flex justify-center items-center ml-4">
                  <FaCog />
                </span>
                <span className="ml-2 text-sm tracking-wide truncate">
                  Settings
                </span>
              </a>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
