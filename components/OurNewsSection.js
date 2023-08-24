const OurNewsSection = ({ newsItems }) => {
    return (
      <div className="w-full py-16">
        <div className="max-w-screen-xl mx-auto px-4">
          <h2 className="text-center text-blue-600 font-bold text-xl mb-4">
            Our Journey
          </h2>
          <br /><br />
  
          <div className="relative">
            <div className="border-r-2 border-blue-600 absolute h-full top-0 left-1/2 transform -translate-x-1/2"></div>
  
            <div className="space-y-8">
              {newsItems.map((newsItem, index) => (
                <div
                  className={`flex items-center justify-evenly ${
                    index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                  }`}
                  key={newsItem.year}
                >
                  <div className="ml-6 mr-48">
                    <h3 className="text-xl font-semibold">{`Year ${newsItem.year}`}</h3>
                    <p>{newsItem.explanation}</p>
                  </div>
                  <div className="flex-shrink-0 w-1/3 h-full relative">
                    <img
                      src={newsItem.imageSrc}
                      alt={`Image ${newsItem.year}`}
                      className="w-full"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default OurNewsSection;
  