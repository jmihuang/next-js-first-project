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

export async function saveProduct(dataset) {
  // 生成 slug 和保護描述
  dataset.slug = slugify(dataset.name.toString(), { lower: true });
  dataset.desc = xss(dataset.desc.toString());
  dataset.alt = xss(dataset.alt.toString());
  dataset.name = xss(dataset.name.toString());
  dataset.engName = xss(dataset.engName.toString());
  dataset.capacity = xss(dataset.capacity.toString());
  dataset.price = xss(dataset.price.toString());
  dataset.desc = xss(dataset.desc.toString());

  console.log("TypeOf", typeof dataset.desc);

  // 確保圖片有傳入
  const imageFile = dataset.image;
  if (!imageFile) {
    throw new Error("No valid image file provided!");
  }

  // 獲取圖片名稱
  const fileName = `${dataset.slug}.${imageFile.name.split(".").pop()}`;

  //讀取圖片為 Buffer 並保存
  const bufferedImage = await imageFile.arrayBuffer();
  const stream = fs.createWriteStream(`public/${fileName}`);

  // 寫入圖片到 public/images 文件夾
  stream.write(Buffer.from(bufferedImage), (error) => {
    if (error) {
      throw new Error("Saving image failed!");
    }
  });

  dataset.image = `/${fileName}`;

  // 將產品保存到資料庫
  db.prepare(
    `INSERT INTO catalogue (alt, name, engName, capacity, image, slug, price, desc) 
    VALUES (
      @alt,
      @name,
      @engName,
      @capacity,
      @image,
      @slug,
      @price,
      @desc
    )`
  ).run(dataset);
}
