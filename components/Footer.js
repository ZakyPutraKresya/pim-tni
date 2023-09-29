import { getProfileData } from '@/pages/admin/profile';
import React, { useEffect, useState } from 'react';
import { API_URL } from './admin/DataEvents';

const Footer = () => {
  const [image, setImage] = useState(null);
  const [title, setTitle] = useState(null);
  const [address, setAddress] = useState(null);
  const [email, setEmail] = useState(null);
  const [phone, setPhone] = useState(null);
  const [fax, setFax] = useState(null);

  useEffect(() => {
    // Buat fungsi async untuk memuat data profil
    const loadProfileData = async () => {
      try {
        const result = await getProfileData();
        if (result.length > 0) {
          setImage(result[0].image);
          setTitle(result[0].title);
          setAddress(result[0].address);
          setEmail(result[0].email);
          setPhone(result[0].phone);
          setFax(result[0].fax);
        }
      } catch (error) {
        console.error('Error loading profile data:', error);
      }
    };

    // Panggil fungsi untuk memuat data profil hanya sekali
    loadProfileData();
  }, []); 
  return (
    <footer className="bg-gray-200 py-5 text-center text-sm mt-20">
      <div className="footer">
        <div className="w-80 mx-auto">
            <a href="#" target="_blank">
            <img
                src={API_URL + "uploads/" + image}
                alt="MABES TNI"
                className="w-auto"
            />
            </a>
        </div>
        <strong className="block mt-3">{title}</strong>
        <div className="text-xs">
          {address}
        </div>
        <div className="text-xs mt-1">
          Contact Us:<br />
          Email: {email}<br />
          Phone: {phone}<br />
          Fax: {fax}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
