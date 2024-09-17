import fs from "node:fs"; //允許img寫入資料夾
import sql from "better-sqlite3";
import slugify from "slugify";
import xss from "xss";

const db = sql("catalogue.db");

//取出
export async function getProducts() {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return db.prepare("SELECT * FROM catalogue").all(); //多行資料取出需要用all
}

//取出單一
export function getProduct(slug) {
  return db.prepare("SELECT * FROM catalogue WHERE slug = ?").get(slug); //多行資料取出需要用all
}

export async function saveProduct(formData) {
  // 生成 slug 和保護描述
  // product.slug = slugify(product.name, { lower: true });
  // product.desc = xss(product.desc);

  console.log("formData", formData);
  return;

  // 確保圖片有傳入
  const imageFile = formData.file;
  if (!imageFile) {
    throw new Error("No valid image file provided!");
  }

  // 獲取圖片名稱
  const fileName = `${imageFile[0].name.split(".").pop()}`;

  //讀取圖片為 Buffer 並保存
  const bufferedImage = await formData.file.buffer();

  const stream = fs.createWriteStream(`public/images/${fileName}`);

  // 寫入圖片到 public/images 文件夾
  stream.write(Buffer.from(bufferedImage), (error) => {
    if (error) {
      throw new Error("Saving image failed!");
    }
  });

  // 設置產品的圖片 URL
  product.image = `/images/${fileName}`;

  // 將產品保存到資料庫
  db.prepare(
    `INSERT INTO catalogue (alt, name, engName, capacity, image, slug, price, desc) VALUES (
      @alt,
      @name,
      @engName,
      @capacity,
      @image,
      @slug,
      @price,
      @desc
    )`
  ).run(product);
}
