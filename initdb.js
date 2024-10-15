const sql = require("better-sqlite3");
const db = sql("data.db");
const { DUMMY_PRODUCTS, DUMMY_NEWS } = require("./dummy-datas");

// 創建catalogue表格
db.prepare(
  `
    CREATE TABLE IF NOT EXISTS catalogue (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        alt TEXT NOT NULL,
        name TEXT NOT NULL,
        engName TEXT NOT NULL,
        capacity TEXT NOT NULL,
        image TEXT NOT NULL,
        slug TEXT NOT NULL UNIQUE,
        price TEXT NOT NULL,
        desc TEXT,
        create_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )
`
).run();

// 創建 news 表格
db.prepare(
  `
  CREATE TABLE IF NOT EXISTS news (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    slug TEXT NOT NULL UNIQUE,
    title TEXT NOT NULL,
    content TEXT NOT NULL,
    date TEXT NOT NULL,
    image TEXT NOT NULL,
    create_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  )
`
).run();

// 插入數據
async function initData() {
  // 插入 catalogue 資料
  const productStmt = db.prepare(`
  INSERT INTO catalogue (alt, name, engName, capacity, image, slug, price, desc) VALUES (
      @alt,
      @name,
      @engName,
      @capacity,
      @image,
      @slug,
      @price,
      @desc
  )
`);

  for (const product of DUMMY_PRODUCTS) {
    productStmt.run(product);
  }

  // 插入 news 資料
  const newsStmt = db.prepare(`
  INSERT INTO news (slug, title, content, date, image) VALUES (@slug, @title, @content, @data, @image)
`);

  for (const news of DUMMY_NEWS) {
    newsStmt.run(news.slug, news.title, news.content, news.date, news.image);
  }
}

// 執行數據初始化
initData();
