"use client";
import React from "react";
import Link from "next/link";
import "@/app/globals.css";
import "@/app/assets/materialize.css";
import "@/app/assets/style.css";
import { EllipsisOutlined, StarOutlined } from "@ant-design/icons";
import { Breadcrumb, Layout, Menu, theme } from "antd";
const { Header, Content, Sider } = Layout;

const items1 = ["1", "2", "3"].map((key) => ({
  key,
  label: `nav ${key}`,
}));
const items2 = [
  {
    key: "product",
    icon: <EllipsisOutlined />,
    label: "產品",
    children: [
      {
        key: "/admin/product/create",
        label: <Link href="/admin/products/create">新增產品</Link>,
      },
    ],
  },
  {
    key: "news",
    icon: <StarOutlined />,
    label: "最新消息",
    children: [
      {
        key: "/admin/news/create",
        label: <Link href="/admin/news/create">新增最新消息</Link>,
      },
    ],
  },
];

export default function AdminLayout({ children }) {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <html lang="zh-tw">
      <body>
        <Layout>
          <Header
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <div className="demo-logo" />
            <Menu
              theme="dark"
              mode="horizontal"
              defaultSelectedKeys={["2"]}
              items={items1}
              style={{
                flex: 1,
                minWidth: 0,
              }}
            />
          </Header>
          <Layout>
            <Sider
              width={200}
              style={{
                background: colorBgContainer,
              }}
            >
              <Menu
                mode="inline"
                defaultSelectedKeys={["1"]}
                defaultOpenKeys={["sub1"]}
                style={{
                  height: "100%",
                  borderRight: 0,
                }}
                items={items2}
              />
            </Sider>
            <Layout
              style={{
                padding: "0 24px 24px",
              }}
            >
              <Breadcrumb
                items={[
                  {
                    title: "Home",
                  },
                  {
                    title: "List",
                  },
                  {
                    title: "App",
                  },
                ]}
                style={{
                  margin: "16px 0",
                }}
              />
              <Content
                style={{
                  padding: 24,
                  margin: 0,
                  minHeight: 280,
                  background: colorBgContainer,
                  borderRadius: borderRadiusLG,
                }}
              >
                {children}
              </Content>
            </Layout>
          </Layout>
        </Layout>
      </body>
    </html>
  );
}
