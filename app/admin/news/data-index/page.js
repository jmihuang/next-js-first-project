"use server";
import React from "react";
import { getAllNews } from "@/lib/news";
import DataTable from "@/components/data-table";

export default async function DataIndex() {
  const data = await getAllNews(); // 在這裡獲取數據
  console.log("data", data);
  return <DataTable data={data} />;
}
