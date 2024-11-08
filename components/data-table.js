"use client";
import { Table, Space } from "antd";
import Link from "next/link";

export default function DataTable({ data, columns }) {
  return (
    <>
      <Table
        columns={columns}
        pagination={{
          position: ["bottomRight"],
        }}
        dataSource={data}
      />
    </>
  );
}
