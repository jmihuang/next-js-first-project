import { NextResponse } from "next/server";
import { writeFile } from "fs/promises";
import path from "path";
import { saveProduct } from "@/lib/catalogue";

export const config = {
    api: {
        bodyParser: false,
    },
};

export async function POST(request) {
    try {
        const formData = await request.formData();
        const file = formData.get("file");

        if (!file) {
            return NextResponse.json(
                { error: "No file uploaded" },
                { status: 400 }
            );
        }

        const bytes = await file.arrayBuffer();
        const buffer = Buffer.from(bytes);

        const filename = file.name.replace(/\s/g, "-");
        const filepath = path.join(process.cwd(), "public", filename);
        await writeFile(filepath, buffer);

        const productData = {
            alt: formData.get("alt"),
            name: formData.get("name"),
            engName: formData.get("engName"),
            capacity: formData.get("capacity"),
            price: formData.get("price"),
            desc: formData.get("desc"),
            image: {
                filepath: filepath,
                originalFilename: file.name,
                mimetype: file.type,
            },
        };

        await saveProduct(productData);

        return NextResponse.json(
            { message: "Form submission successful" },
            { status: 200 }
        );
    } catch (error) {
        console.error("Error handling the form submission", error);
        return NextResponse.json(
            { message: "Server Error", error: error.message },
            { status: 500 }
        );
    }
}
