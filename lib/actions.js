//form submit

"use server";
import { saveProduct } from "./catalogue";
import { saveNews } from "./news";

export async function uploadProduct(formData) {
  const products = {};
  for (const [key, value] of formData.entries()) {
    products[key] = value;
  }
  await saveProduct(products);
}

export async function uploadNews(formData) {
  // const News = {};
  // for (const [key, value] of formData.entries()) {
  //   News[key] = value;
  // }
  const response = await saveNews(formData);
  return response;
}
