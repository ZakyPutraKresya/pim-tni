const OurNewsSection = ({ newsItems }) => {
    return (
      <div className="w-full py-16">
        <div className="max-w-screen-xl mx-auto px-4">
          <h2 className="text-center text-blue-600 font-bold text-xl mb-4">
            Our Journey
          </h2>
          <br /><br />
  
          <div className="space-y-8">
            {newsItems.map((newsItem, index) => (
              <div
                className={`flex justify-center items-center ${
                  index % 2 === 0 ? 'flex-row-reverse' : 'flex-row'
                }`}
                key={newsItem.year}
              >
                <div
                  className={`${
                    index % 2 === 0 ? 'border-blue-right' : 'border-blue-left'
                  } border-b-2 border-blue-600 h-full w-16`}
                ></div>
                <div className="ml-6 mr-6">
                  <h3 className="text-xl font-semibold">{`Year ${newsItem.year}`}</h3>
                  <p>{newsItem.explanation}</p>
                </div>
                <div className="flex-shrink-0 w-1/3">
                  <img
                    src={newsItem.imageSrc}
                    alt={`Image ${newsItem.year}`}
                    className="w-full"
                  />
                </div>
                <div
                  className={`${
                    index % 2 === 0 ? 'border-blue-left' : 'border-blue-right'
                  } border-b-2 border-blue-600 h-full w-16`}
                ></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default OurNewsSection;
  