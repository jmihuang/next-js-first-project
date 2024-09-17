import formidable from "formidable";
import fs from "fs";
import path from "path";

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function UploadImage(req, res) {
  if (req.method === "POST") {
    const form = new formidable.IncomingForm();
    form.uploadDir = path.join(process.cwd(), "/public/uploads");
    form.keepExtensions = true;

    form.parse(req, (err, fields, files) => {
      if (err) {
        res.status(500).json({ error: "Error parsing the files" });
        return;
      }

      const file = files.image[0]; // Adjust according to your form field names
      const oldPath = file.filepath;
      const newPath = path.join(form.uploadDir, file.originalFilename);

      const readStream = fs.createReadStream(oldPath);
      const writeStream = fs.createWriteStream(newPath);

      readStream.pipe(writeStream);

      writeStream.on("finish", () => {
        res
          .status(200)
          .json({ message: "File uploaded successfully!", path: newPath });
      });

      writeStream.on("error", (error) => {
        res.status(500).json({ error: "Error saving the file" });
      });
    });
  }
}
