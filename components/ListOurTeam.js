const API_URL = process.env.NEXT_PUBLIC_API_URL;

const ListOurTeam = ({ listData }) => {
  return (
    <div className="container mx-auto my-10">
      <div className="grid grid-cols-1 gap-6 mx-auto" style={{ width: 1000 }}>
        {listData.map((data, index) => (
          <div key={index} className="flex items-center p-4 rounded">
            <div className="w-1/4 text-center">
              <img
                src={API_URL + "uploads/" + data.image}
                className="w-56 h-60 object-cover rounded-md"
                alt={`${data.name} Image`}
              />
            </div>
            <div className="w-3/4 ml-10">
              <h4 className="text-gray-500" dangerouslySetInnerHTML={{ __html: data.name }}></h4>
              <p className="text-justify text-gray-500 mt-2" dangerouslySetInnerHTML={{ __html: data.description }}></p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListOurTeam;
