import { useState } from "react";
import DataTable from "react-data-table-component";
const API_URL = process.env.NEXT_PUBLIC_API_URL;

const DataTeam = ({ data, onSave }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [name, setName] = useState(null);
  const [description, setDescription] = useState(null);
  const [ids, setIds] = useState(null);

  const handleEditClick = (id) => {
    const selectedObject = data.find(item => item.id === id);

    if (selectedObject) {
      setName(selectedObject.name);
      setDescription(selectedObject.description);
      setIds(selectedObject.id);
    }
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setName(null);
    setDescription(null);
    setIds(null);
    setIsModalOpen(false);
  };
  const columns = [
    {
      name: "Name",
      selector: "name",
      sortable: true,
    },
    {
      name: "Description",
      selector: "description",
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
          <button
            // onClick={() => handleDeleteClick(row)} // Tambahkan fungsi delete di sini
            className="bg-red-500 text-white px-2 py-1 mx-1 rounded"
          >
            Delete
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
    body.append("name", name);
    body.append("description", description);
    if(e.target.file.files.length > 0){
      body.append("file", e.target.file.files[0]);
    }
    if(ids != null){
      body.append("id", ids);
      response = await fetch(API_URL+"team/editList", {
        method: "POST",
        body
      });
    } else {
      response = await fetch(API_URL+"team/createList", {
        method: "POST",
        body
      });
    }

    if (response.ok) {
      const data = await response.json();
      onSave();
      setIsModalOpen(false);
      alert(data.message); // Menampilkan pesan dari respons dalam sebuah alert
    } else {
      alert("Something went wrong")
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
              Our Team List
            </h1>

            <button
              className="bg-blue-500 text-white px-5 mb-3 py-2 absolute right-[100px] rounded text-md"
              onClick={handleEditClick}
            >
              Add
            </button>
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
                  New Name:
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="appearance-none w-full py-2 px-3 text-gray-200 leading-tight focus:outline-none focus:shadow-outline bg-gray-600 rounded"
                />
                <input
                  type="hidden"
                  value={ids}
                  onChange={(e) => setIds(e.target.value)}
                  className="appearance-none w-full py-2 px-3 text-gray-200 leading-tight focus:outline-none focus:shadow-outline bg-gray-600 rounded"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-200 text-sm font-bold mb-2">
                  New Description:
                </label>
                <input
                  type="text"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="appearance-none w-full py-2 px-3 text-gray-200 leading-tight focus:outline-none focus:shadow-outline bg-gray-600 rounded"
                />
              </div>
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

export default DataTeam;