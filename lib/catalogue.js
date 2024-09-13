import sql from "better-sqlite3";
import { resolve } from "styled-jsx/css";
const db = sql("catalogue.db");
//取出
export async function getProducts() {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  //   throw new Error("很抱歉，載入失敗, 請稍後再試！");
  return db.prepare("SELECT * FROM catalogue").all(); //多行資料取出需要用all
}
