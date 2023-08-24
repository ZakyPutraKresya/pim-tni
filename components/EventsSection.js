import { useState } from "react";

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
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {filteredEvents.map((event) => (
            <div
              key={event.id}
              className="bg-white border rounded shadow overflow-hidden w-full h-auto pb-8"
            >
              <div className="p-4">
                <h3 className="text-black font-bold text-2xl mt-5">
                  {event.title}
                </h3>
                <p className="text-gray-700 mb-2 mt-2">Venue: {event.venue}</p>
                <p className="text-gray-700 text-sm">{event.date}</p>
                <button
                  className="bg-blue-500 text-white px-3 py-1 rounded float-right mt-10"
                  onClick={() => onEventClick(event)}
                >
                  Learn more
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EventsSection;
