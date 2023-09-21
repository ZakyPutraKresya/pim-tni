import { useState } from "react";
import styles from '@/styles/Main.module.scss'
import { FaStar } from "react-icons/fa";
import moment from "moment";
import { API_URL } from "./admin/DataEvents";

const EventsSection = ({ events, onYearClick, onEventClick }) => {
  const [selectedYear, setSelectedYear] = useState(null);

  const handleYearClick = (year) => {
    setSelectedYear(year);
    onYearClick(year)
  };
  // Ambil tahun unik dari events
  const years = Array.from(new Set(events.map((event) => moment(event.event_date).format("YYYY"))));

  const filteredEvents = selectedYear
    ? events.filter((event) => moment(event.event_date).format("YYYY") === selectedYear)
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
                    src={event.image != undefined ? API_URL + "uploads/" + event.image : "/img/png/notfound.png"}
                    onError="/img/png/notfound.png"
                    alt={event.title}
                    className="w-full h-full"
                  />
                  <div className={`${styles['card-content']} flex`}>
                    <div className="icon-bg bg-blue-500 text-white flex items-center justify-center w-12 h-12 rounded">
                      <FaStar />
                    </div>
                    <div className="absolute bottom-[180px] left-[200px] font-bold">{moment(event.event_date).format("DD-MM-YYYY")}</div>
                    <div className="title flex-grow bg-transparent w-12 h-12">
                      <p className="text-sm md:text-base mt-3 ml-2 font-bold text-black text-ellipsis overflow-hidden whitespace-nowrap" title={`${event.title}`}>{event.title}</p>
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
