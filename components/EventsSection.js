import { useState } from "react";
import styles from '@/styles/Main.module.scss'
import { FaStar } from "react-icons/fa";

const EventsSection = ({ events, onYearClick, onEventClick }) => {
  const [selectedYear, setSelectedYear] = useState(null);

  const handleYearClick = (year) => {
    setSelectedYear(year);
    onYearClick(year)
  };
  // Ambil tahun unik dari events
  const years = Array.from(new Set(events.map((event) => event.year)));

  const filteredEvents = selectedYear
    ? events.filter((event) => event.year === selectedYear)
    : events;

  return (
    <div className="flex" style={{ marginTop: 75 }}>
      <div className="hidden lg:flex lg:flex-col lg:col-span-2 lg:items-center lg:mt-[-1.5%] w-1/4 ml-14">
        <h3 className="text-black font-bold mb-2 text-2xl">Browse by Year</h3>
        <div className="mt-2">
          {years.map((year) => (
            <a
              key={year}
              href="#"
              onClick={(e) => {
                e.preventDefault();
                handleYearClick(year);
              }}
              className={`text-black text-lg font-semibold ${
                selectedYear === year ? "text-blue-500" : ""
              } block`}
            >
              {year} <span className="text-blue-500">❯</span>
            </a>
          ))}
        </div>
      </div>

      <div className="lg:w-10/12 p-4">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
          {filteredEvents.map((event) => (
                  <div className={styles['card-container']} key={event.id} style={{cursor: 'pointer'}} onClick={() => onEventClick(event)}>
                <div className={`${styles.card} relative`}>
                  <img
                    src="/img/jpg/CardTitle.jpeg"
                    alt={event.title}
                    className="w-full h-full"
                  />
                  <div className={`${styles['card-content']} flex`}>
                    <div className="icon-bg bg-blue-500 text-white flex items-center justify-center w-12 h-12 rounded">
                      <FaStar />
                    </div>
                    <div className="title flex-grow bg-transparent w-12 h-12">
                      <p className="text-sm md:text-base mt-3 ml-2 font-bold text-white text-ellipsis overflow-hidden whitespace-nowrap" title={`${event.title} (2023)`}>{event.title} (2023)</p>
                    </div>
                  </div>
                </div>
              </div>

          ))}
        </div>
      </div>
    </div>
  );
};

export default EventsSection;
