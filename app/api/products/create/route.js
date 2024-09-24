import { NextResponse } from "next/server";
import { IncomingForm } from "formidable";
import fs from "fs";
import path from "path";
import { saveProduct } from "@/lib/catalogue";

export async function POST(req) {
  if (req.method === "POST") {
    try {
      // Initialize formidable to handle multipart form data
      const form = new IncomingForm({
        uploadDir: path.join(process.cwd(), "/public"),
        keepExtensions: true, // Keep the file extension
      });
      // Parse the form data
      form.parse(req, async (err, fields, files) => {
        if (err) {
          res.status(500).json({ message: "Error parsing form data" });
          return;
        }

        // Access fields and files
        const { alt, name, engName, capacity, price, desc } = fields;
        const image = files.image; // Assuming file input name is 'file'

        // Example: returning uploaded file path
        const productData = {
          alt,
          name,
          engName,
          capacity,
          price,
          desc,
          image,
        };
        await saveProduct(productData);
      });
      return NextResponse.json(
        { message: "Form submission successful" },
        { status: 200 }
      );
    } catch (error) {
      console.error("Error parsing form data", error);
      return NextResponse.json(
        { message: "Error parsing form data", error: error.message },
        { status: 500 }
      );
    }
  }
}
