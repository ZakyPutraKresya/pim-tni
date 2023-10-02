import { useState } from "react";
import DataTable from "react-data-table-component";
const API_URL = process.env.NEXT_PUBLIC_API_URL;

const DataSettings = ({ data, onSave }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [ids, setIds] = useState(null);

  const handleEditClick = (id) => {
    const selectedObject = data.find(item => item.id === id);

    if (selectedObject) {
      setIds(selectedObject.id);
    }
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIds(null);
    setIsModalOpen(false);
  };
  const columns = [
    {
      name: "Title",
      selector: "title",
      sortable: true,
    },
    {
      name: "Image",
      cell: (row) => (
        <div className="my-2 mx-2">
            <img src={API_URL + "uploads/" + row.image} width={90} />
        </div>
      ),
    },
    {
      name: "Actions",
      cell: (row) => (
        <div>
          <button
            onClick={() => handleEditClick(row.id)} // Tambahkan fungsi edit di sini
            className="bg-blue-500 text-white px-2 py-1 mx-1 rounded"
          >
            Edit
          </button>
        </div>
      ),
    },
  ];

  const customTitleStyles = {
    backgroundColor: "#111827", // Ganti dengan warna bg-dark-900 yang sesuai
    padding: "15px 15px", // Sesuaikan sesuai dengan kebutuhan Anda
    textAlign: "center",
    marginLeft: "-20px",
    marginRight: "-20px",
    color: "white",
  };
  const customStyles = {
    headRow: {
      style: {
        backgroundColor: "#111827",
        color: "white",
        width: "900px",
      },
    },
    rows: {
      style: {
        backgroundColor: "#111827",
        color: "white",
        width: "900px",
      },
    },
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const body = new FormData();
    let response;
    if(e.target.file.files.length > 0){
      body.append("file", e.target.file.files[0]);
    }
    if(ids){
      body.append("id", ids);
      response = await fetch(API_URL+"settings/editList", {
        method: "POST",
        body
      });
      if (response.ok) {
        const data = await response.json();
        onSave();
        setIsModalOpen(false);
        alert(data.message); 
      } else {
        alert("Something went wrong")
      }
    }

  };
  return (
    <div className="w-[900px] mx-auto my-10 bg-gray-900">
      <DataTable
        title={
          <div
            className="md:col-span-2 xl:col-span-3 flex justify-center items-center"
            style={customTitleStyles}
          >
            <h1 className="text-center text-blue-600 font-semibold text-xl mb-4">
              Header Image List
            </h1>
          </div>
        }
        columns={columns}
        data={data}
        customStyles={customStyles}
        pagination
        paginationPerPage={10}
        paginationRowsPerPageOptions={[10, 20, 30]}
        paginationComponentOptions={{
          rowsPerPageText: "Rows per page:",
        }}
        theme="dark"
      />
      {isModalOpen && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50">
          <div className="fixed top-0 left-0 w-full h-full bg-black opacity-50"></div>
          <div
            className="dark:bg-gray-800 rounded-lg z-10 absolute p-4 w-[700px] shadow-md"
            style={{ maxHeight: 600 }}
          >
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-gray-200 text-sm font-bold mb-2">
                  New Image File:
                </label>
                <input
                  type="file"
                  accept="image/*"
                  name="file"
                  className="appearance-none w-full py-2 px-3 text-gray-200 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div className="flex justify-end">
                <button
                  onClick={handleModalClose}
                  className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded mr-2"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
                >
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default DataSettings;
