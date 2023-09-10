const WelcomeSection = () => {
    <div className="container mx-auto px-12 mt-5">
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 p-4 gap-4 text-black dark:text-white">
      <div className="md:col-span-2 xl:col-span-3">
        <h3 className="text-lg font-semibold text-center">
          Welcome Title
        </h3>
      </div>
    </div>
    <div className="flex">
      <div className="w-2/3 pr-8">
        <h2 className="text-2xl font-bold mb-4">
          <b>Welcome</b>
        </h2>
        <p className="textBlack">Lorem</p>
      </div>
      <div className="w-1/3">
        <img
          src="https://www.ifc.org.sg/ifc2web/Scripts/public/common/images/contactUS/HomePageImage.jpg"
          className="w-full h-auto rounded"
          alt="Image"
        />
      </div>
    </div>
  </div>
};

export default WelcomeSection;
