// import fs from "fs"; //允許img寫入資料夾
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

export async function saveProduct(product) {
  product.slug = slugify(product.name, { lower: true });
  product.desc = xss(product.desc);
  const fileName = `${product.slug}.${product.image.file.name
    .split(".")
    .pop()}`;

  // const stream = fs.createWriteStream(`public/images/${fileName}`);
  // const bufferedImage = await product.image.arrayBuffer();
  // stream.write(Buffer.from(bufferedImage), (error) => {
  //   if (error) {
  //     throw new Error("Saveing image failed!");
  //   }
  // });

  // product.image = `/images/${fileName}`;
  db.prepare(
    `INSERT INTO catalogue (alt, name, engName, capacity, image, slug, price,desc) VALUES (
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
