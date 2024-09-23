// app/api/products/create.js
import { NextResponse } from "next/server";
import { saveProduct } from "@/lib/catalogue";

export async function POST(req) {
  try {
    // Parse the FormData
    const formData = await req.formData();
    // Extract individual form fields
    const alt = formData.get("alt"); // Extracting 'alt' field
    const name = formData.get("name"); // Extracting 'name' field
    const engName = formData.get("engName"); // Extracting 'engName' field
    const capacity = formData.get("capacity"); // Extracting 'capacity' field
    const price = formData.get("price"); // Extracting 'price' field

    // Extract the image file
    const image = formData.get("image"); // Assuming 'image' is the field name

    // Example: Save product details to a database (without actual file saving)
    const productData = {
      alt,
      name,
      engName,
      capacity,
      price,
      imageName: image ? image.name : null, // Save image name if available
    };

    // Simulate saving to the database
    await saveProduct(productData);
    return NextResponse.json({ message: "Product created successfully!" });
  } catch (error) {
    return NextResponse.json(
      { message: "Error creating product" },
      { status: 500 }
    );
  }
}
