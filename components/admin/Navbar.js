import Link from "next/link";
import React from "react";

const Navbar = () => {
  const toggleTheme = () => {
    // Implement your theme toggle logic here
  };

  return (
    <div className="w-full flex items-center justify-between text-white z-10 dark:bg-gray-800">
      <div className="flex items-center justify-start md:justify-center pl-3 w-14 md:w-64 h-14 bg-blue-800 dark:bg-gray-800 border-none relative">
        <Link href="/">
          <div className="flex items-center">
            <img
              src="/img/png/logo.png"
              className={`h-10 w-auto mr-4`}
              alt="Logo"
            />
          </div>
        </Link>
        <div className="absolute right-0 top-0 bottom-0 w-px bg-slate-500 dark:bg-gray-600"></div>
      </div>

      <div className="flex justify-between items-center h-14 bg-blue-800 dark:bg-gray-800 header-right">
        <ul className="flex items-center">
          <li>
            <div className="block w-px h-6 mx-3 bg-gray-400 dark:bg-gray-700"></div>
          </li>
          <li>
            <Link href="/login" legacyBehavior>
            <a className="flex items-center mr-4 hover:text-blue-100">
              <span className="inline-flex mr-1">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                  ></path>
                </svg>
              </span>
              Logout
            </a>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
