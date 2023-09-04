import Link from "next/link";
import { useState } from "react";
import { FaFileAlt } from "react-icons/fa";

const ReportSection = ({ events }) => {
  const [selectedType, setSelectedType] = useState(null);

  const handleYearClick = (type) => {
    setSelectedType(type);
  };

  // Ambil tahun unik dari events
  const types = ["Weekly Report", "Monthly Report", "Half-Yearly Report", "Annual Report", "Other Products"];

  // Tahun-tahun yang ingin Anda tampilkan
  const years = [2022, 2023]; // Ganti dengan tahun yang sesuai

  return (
    <div className="flex" style={{ marginTop: 75 }}>
      <div className="hidden lg:flex lg:flex-col lg:col-span-2 lg:items-center lg:mt-[-1.5%] w-1/4 ml-14">
        <h3 className="text-black font-bold mb-2 text-2xl">Browse by Type</h3>
        <div className="mt-2">
          {types.map((type) => (
            <a
              key={type}
              href="#"
              onClick={(e) => {
                e.preventDefault();
                handleYearClick(type);
              }}
              className={`text-black text-lg font-semibold mt-5 ${
                selectedType === type ? "text-blue-500" : ""
              } block`}
            >
              {type} <span className="text-blue-500">❯</span>
            </a>
          ))}
        </div>
      </div>

      <div className="mx-10 container w-full" style={{marginTop: -50}}>
        {types.map((type) => (
          <div className="mt-10" key={type}>
            <h3 className="text-black font-bold mb-2 text-2xl">{type}</h3>
            <hr className="border-t border-gray-300 my-2" />
            <div className="mt-6">
              {years.map((year) => (
                <div key={year} className="flex items-center mt-4">
                  <FaFileAlt style={{ color: "darkblue", marginLeft: 15 }} size={50} />
                  <span className="ml-6 font-bold" style={{ color: "blue" }}>
                    {year}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReportSection;
