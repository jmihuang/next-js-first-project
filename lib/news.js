import fs from "node:fs"; //允許img寫入資料夾
import path from "node:path";
import sql from "better-sqlite3";
import slugify from "slugify";
import xss from "xss";

const db = sql("data.db");

export async function getAllNews() {
  const news = db.prepare("SELECT * FROM news ORDER BY create_time DESC").all();
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return news;
}

export async function getLatestNews() {
  const latestNews = db
    .prepare("SELECT * FROM news ORDER BY create_time DESC LIMIT 3")
    .all();
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return latestNews;
}

export async function getAvailableNewsYears() {
  const years = db
    .prepare("SELECT DISTINCT strftime('%Y', date) as year FROM news")
    .all();
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return years;
}

export function getAvailableNewsMonths(year) {
  return db
    .prepare(
      "SELECT DISTINCT strftime('%m', date) as month FROM news WHERE strftime('%Y', date) = ?"
    )
    .all(year)
    .map((month) => month.month);
}

export async function getNewsForYear(year) {
  const news = db
    .prepare(
      "SELECT * FROM news WHERE strftime('%Y', date) = ? ORDER BY date DESC"
    )
    .all(year);

  await new Promise((resolve) => setTimeout(resolve, 2000));

  return news;
}

export async function getNewsForYearAndMonth(year, month) {
  const news = db
    .prepare(
      "SELECT * FROM news WHERE strftime('%Y', date) = ? AND strftime('%m', date) = ? ORDER BY date DESC"
    )
    .all(year, month);

  await new Promise((resolve) => setTimeout(resolve, 2000));

  return news;
}

//取出單一
export function getNews(slug) {
  return db.prepare("SELECT * FROM news WHERE slug = ?").get(slug);
}

//儲存
export async function saveNews(dataset) {
  try {
    // 生成 slug 將字串轉成url友好格式 + timestamp
    const currentTimestamp = new Date().toISOString();
    dataset.slug = slugify(generateSlug(dataset.title), {
      lower: true,
    });
    dataset.content = xss(dataset.content.toString());
    dataset.title = xss(dataset.title.toString());

    function generateSlug(name) {
      const timestamp = Date.now(); // 以毫秒為單位的當前時間
      const randomNum = Math.floor(Math.random() * 10000); // 生成一個隨機的四位數
      return `${slugify(name, { lower: true })}-${timestamp}-${randomNum}`;
    }

    // 確保圖片有傳入
    const imageFile = dataset.image;
    if (!imageFile) {
      throw new Error("No valid image file provided!");
    }

    // 獲取圖片名稱
    const fileName = `${dataset.slug}.${imageFile.name.split(".").pop()}`;

    // 讀取圖片為 Buffer 並保存
    const bufferedImage = await imageFile.arrayBuffer();

    const uploadDir = path.join(process.cwd(), "public", "upload");

    // 檢查資料夾是否存在，若不存在則創建
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir, { recursive: true }); // 使用 recursive 選項來創建多層目錄
    }

    const stream = fs.createWriteStream(`${uploadDir}/${fileName}`);

    // 寫入圖片到 public/images 文件夾
    stream.write(Buffer.from(bufferedImage), (error) => {
      if (error) {
        throw new Error("Saving image failed!");
      }
    });

    dataset.image = `upload/${fileName}`;

    // 保存到資料庫
    db.prepare(
      `INSERT INTO news (slug, title, content, image) 
      VALUES (
        @slug,
        @title,
        @content,
        @image
      )`
    ).run(dataset);
    await new Promise((resolve) => setTimeout(resolve, 2000));

    // 返回成功的回傳值
    return { success: true, message: "News saved successfully!" };
  } catch (error) {
    // 返回失敗的回傳值
    return { success: false, message: error.message };
  }
}
