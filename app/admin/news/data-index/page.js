"use server";
import React from "react";
import { getAllNews } from "@/lib/news";
import DataTable from "@/components/data-table";

export default async function DataIndex() {
  const data = await getAllNews(); // 在這裡獲取數據
  const columns = [
    {
      title: "標題",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "圖片",
      dataIndex: "image",
      key: "image",
    },
    {
      title: "內容",
      dataIndex: "content",
      key: "content",
    },
    {
      title: "創建日期",
      dataIndex: "create_time",
      key: "創建日期",
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <a href={`/edit/${record.key}`}>編輯</a>
          <a href={`/delete/${record.key}`}>刪除</a>
        </Space>
      ),
    },
  ];
  return <DataTable data={data} columns={columns} />;
}
