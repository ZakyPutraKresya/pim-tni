import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-200 py-5 text-center text-sm mt-20">
      <div className="footer">
        <div className="w-80 mx-auto">
            <a href="#" target="_blank">
            <img
                src="/img/png/logo.png"
                alt="MABES TNI"
                className="w-auto"
            />
            </a>
        </div>
        <strong className="block mt-3">Copyright © PUSAT INFORMASI MARITIM</strong>
        <div className="text-xs">
          Jl. Dr. Sutomo No.11, Ps. Baru, Kecamatan Sawah Besar, Kota Jakarta Pusat, Daerah Khusus Ibukota Jakarta 10710
        </div>
        <div className="text-xs mt-1">
          Contact Us:<br />
          Email: pim@pusinfomar-tni.mil.id<br />
          Phone: +62 21 22037740<br />
          Fax: +62 21 22038176
        </div>
      </div>
    </footer>
  );
};

export default Footer;
