import React, { useEffect } from 'react';
import Link from 'next/link';
import useDropdownStore from '@/store/useDropdownStore';
import styles from '@/styles/Main.module.scss'
import { FaCaretDown } from 'react-icons/fa';

const Navbar = () => {
    const toggleDropdown = useDropdownStore(state => state.toggleDropdown);
    const closeAllDropdowns = useDropdownStore(state => state.closeAllDropdowns);
    const addDropdown = useDropdownStore(state => state.addDropdown);
    const dropdowns = useDropdownStore(state => state.dropdowns);
  
    useEffect(() => {
      addDropdown('servicesDropdown');
      addDropdown('moreDropdown');
      // Add more dropdowns here if needed
    }, [addDropdown]);
  
    const handleDropdownClick = (dropdownName) => {
        if (dropdowns[dropdownName]) {
          toggleDropdown(dropdownName);
        } else {
          toggleDropdown(dropdownName);
          closeAllDropdowns(dropdownName);
        }
      };

  return (
    <nav className="bg-transparent p-4 absolute w-full z-10">
      <div className="container mx-auto flex justify-between items-center">
        <Link href='/'>
          <div className="flex items-center">
            <img src="/img/png/logo.png" className={`h-16 w-72 mr-4`} alt="Logo" />
          </div>
        </Link>
        <ul className="flex space-x-4">
          <li className="relative">
            <Link href='' className="text-white flex" onClick={() => handleDropdownClick('servicesDropdown')}>
              About Us
              <FaCaretDown className="mt-1 ml-1 transform" />
            </Link>
            <ul className={`${styles['dropdown-content']} ${dropdowns['servicesDropdown'] ? '' : 'hidden'}`} style={{
                minWidth: '200px',
                right: -50
            }}>
              <li>
                <Link href="/about" legacyBehavior className="block">
                  About us
                </Link>
              </li>
              <li>
                <Link href="/our-team" legacyBehavior className="block">
                  Our Team
                </Link>
              </li>
            </ul>
          </li>
          <li className="relative">
            <Link href="" className="text-white flex relative" onClick={() => handleDropdownClick('moreDropdown')}>
              Resources
              <FaCaretDown className="mt-1 ml-1 transform" />
            </Link>

            <ul className={`${styles['dropdown-content']} ${dropdowns['moreDropdown'] ? '' : 'hidden'}`} style={{ minWidth: '200px', right: -50 }}>
              <li><Link href="/" className="block">Resources 1</Link></li>
            </ul>
          </li>
          <li><Link href="/events" className="text-white">Events</Link></li>
          <li><Link href="/gallery" className="text-white">Gallery</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
