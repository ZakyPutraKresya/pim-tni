import { IncomingForm } from "formidable";
import fs from "fs";
import path from "path";

export const config = {
  api: {
    bodyParser: false,
  },
};

const post = (req, res) => {
  const form = new IncomingForm();
  form.parse(req, async function (err, fields, files) {
    const fileName = fields.fileName[0];
    const filePath = `./public/uploads/${fileName}`;
    
    // Membuat direktori "public/uploads" jika belum ada
    ensureDirectoryExists(path.dirname(filePath));
    saveFile(files.file, fields.fileName[0]);
    return res.status(200).json({ message: "Successfully Updated Image" });
  });
};

const ensureDirectoryExists = (directory) => {
    if (!fs.existsSync(directory)) {
      fs.mkdirSync(directory, { recursive: true });
    }
  };

const saveFile = (file, fileName) => {
  if (file[0].filepath) {
    // Memeriksa apakah properti filepath ada
    const data = fs.readFileSync(file[0].filepath);
    fs.writeFileSync(`./public/uploads/${fileName}`, data);

    fs.unlinkSync(file[0].filepath); // Menghapus file sementara
    return;
  } else {
    console.error("Tidak ada properti filepath dalam objek file.");
    return;
  }
};

export default (req, res) => {
  req.method === "POST"
    ? post(req, res)
    : req.method === "PUT"
    ? console.log("PUT")
    : req.method === "DELETE"
    ? console.log("DELETE")
    : req.method === "GET"
    ? console.log("GET")
    : res.status(404).send("");
};
