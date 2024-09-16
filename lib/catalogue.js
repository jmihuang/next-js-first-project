import sql from "better-sqlite3";
// import slugify from "slugify";
// import xss from "xss";

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

export function testProduct(product) {
  console.log(product);
}

export function saveProduct(product) {
  console.log(product);
  // product.slug = slugify(product.name, { lower: true });
  // product.desc = xss(product.desc);
  // const fileName = (image.name = `${product.slug}.${product.image.file.name}`);
  //const stream = fs.createWriteStream(`public/images/${fileName}`);
}
