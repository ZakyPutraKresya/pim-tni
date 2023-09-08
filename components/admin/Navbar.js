import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { Cookies } from "react-cookie";

const cookies = new Cookies();
const Navbar = () => {
  const router = useRouter();

  const signOut = () => {
    cookies.remove("token");
    router.push("/login");
  };

  return (
    <div className="w-full flex items-center justify-between text-white z-10 dark:bg-gray-800">
      <div className="flex items-center justify-start md:justify-center pl-3 md:w-64 h-14 bg-blue-800 dark:bg-gray-800 border-none fixed">
        <Link href="/">
          <div className="flex items-center">
            <img
              src="/img/png/logo.png"
              className={`h-10 w-auto mr-4`}
              alt="Logo"
            />
          </div>
        </Link>
      </div>

      <div className="flex justify-between items-center h-14 bg-blue-800 dark:bg-gray-800 header-right ml-auto">

        <ul className="flex items-center">
          <li>
            <div className="block w-px h-6 mx-3 bg-gray-400 dark:bg-gray-700"></div>
          </li>
          <li>
            <a href="#" onClick={signOut} className="flex items-center mr-4 hover:text-blue-100">
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
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
