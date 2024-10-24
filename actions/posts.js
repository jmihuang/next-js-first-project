"use server";
import { uploadImage } from "@/lib/cloudinary";
import { saveNews } from "@/lib/news";
import { redirect } from "next/navigation";
export async function createPost(prevState, formData) {
  const title = formData.get("title");
  const image = formData.get("image");
  const content = formData.get("content");
  if (title) {
  }
  let errors = [];

  if (!title || title.trim().length === 0) {
    errors.push("Title is required.");
  }

  if (!content || content.trim().length === 0) {
    errors.push("Content is required.");
  }

  if (!image || image.size === 0) {
    errors.push("Image is required.");
  }

  if (errors.length > 0) {
    return { errors };
  }
  let imageUrl;
  try {
    imageUrl = await uploadImage(image);
  } catch (error) {
    throw new Error(
      `error:${JSON.stringify(error, Object.getOwnPropertyNames(error), 2)}`
    );
  }

  await saveNews({
    image: imageUrl,
    title,
    content,
    userId: 1,
  });

  redirect("/news");
}
