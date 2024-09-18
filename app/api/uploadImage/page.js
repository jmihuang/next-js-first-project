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
    console.log("RES", res);
  }
}
