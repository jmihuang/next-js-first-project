//form submit

"use server";
import { saveProduct } from "./catalogue";

export async function uploadProduct(formData) {
  console.log(formData);
  await saveProduct(formData);
}
