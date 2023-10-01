// Infographislist.js
import React, { useEffect, useState } from 'react';
import { API_URL } from './admin/DataEvents';

const Infographislist = ({ data }) => {
  const [selectedInfographic, setSelectedInfographic] = useState(null);

  // Fungsi untuk menampilkan preview PDF
  const openPDFPreview = (infographic) => {
    setSelectedInfographic(infographic);
  };

  // Fungsi untuk menutup preview PDF
  const closePDFPreview = () => {
    setSelectedInfographic(null);
  };
  useEffect(() => {
    if (selectedInfographic) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [selectedInfographic]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-10">
      {data.map((infographic, index) => (
            <div key={index} className="border p-2 rounded-md" onClick={() => openPDFPreview(infographic)} style={{cursor: 'pointer'}}>
          <img
            src="/img/png/preview-pdf.png"
            alt={`Infographic ${index + 1}`}
            style={{ width: 150 }}
            className="mx-auto"
          />
          <p className="text-center font-semibold mx-2 overflow-hidden whitespace-nowrap text-ellipsis">{infographic.title}</p>
        </div>
      ))}
      {selectedInfographic && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-75">
          <div className="bg-white p-4 border  rounded">
            {/* Tampilkan PDF di sini */}
            <embed src={API_URL + "pdf/" + selectedInfographic.pdfurl} type="application/pdf" width="1200px" height="500px" />
            <button className="bg-blue-500 text-white px-3 py-1 rounded mt-4 float-right" onClick={closePDFPreview}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Infographislist;
