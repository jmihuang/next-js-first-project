//form submit

"use server";
import { saveProduct } from "./catalogue";

export async function uploadProduct(formData) {
  const products = {};
  for (const [key, value] of formData.entries()) {
    products[key] = value;
  }
  await saveProduct(products);
}

export async function uploadNews(formData) {
  const products = {};
  for (const [key, value] of formData.entries()) {
    products[key] = value;
  }
  // await saveProduct(products);
}
