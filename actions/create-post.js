"use server";
// import uploadImage from "@/lib/cloudinary";
// import { saveNews } from "@/lib/news";
export async function createPost(preState, formData) {
  const title = formData.get("title");
  const image = formData.get("image");
  const content = formData.get("content");
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
  // let imageUrl;
  // try {
  //   imageUrl = await uploadImage(image);
  // } catch (error) {
  //   throw new Error("Image upload failed.");
  // }

  // try {
  //   const response = await saveNews({
  //     content,
  //     imageUrl,
  //     title,
  //   });
  //   return true;
  // } catch (error) {
  //   return error;
  // }
}
