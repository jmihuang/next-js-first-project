"use client";
import React from "react";
import { Form, Input, Button, Upload, InputNumber } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import ImagePicker from "@/components/form/imagePicker";
import { uploadProduct } from "@/lib/actions";

const CreateProductItem = () => {
  return (
    <Form
      name="product_form"
      layout="vertical"
      onFinish={uploadProduct}
      initialValues={{ price: 0 }}
    >
      {/* Alt */}
      <Form.Item
        label="Alt Text"
        name="alt"
        rules={[{ required: true, message: "Alt text is required!" }]}
      >
        <Input placeholder="Enter image alt text" />
      </Form.Item>

      {/* Name */}
      <Form.Item
        label="Product Name"
        name="name"
        rules={[{ required: true, message: "Product name is required!" }]}
      >
        <Input placeholder="Enter product name" />
      </Form.Item>

      {/* English Name */}
      <Form.Item
        label="English Name"
        name="engName"
        rules={[{ required: true, message: "English name is required!" }]}
      >
        <Input placeholder="Enter English name" />
      </Form.Item>

      {/* Capacity */}
      <Form.Item
        label="Capacity"
        name="capacity"
        rules={[{ required: true, message: "Capacity is required!" }]}
      >
        <Input placeholder="Enter product capacity" />
      </Form.Item>

      {/* Image Upload */}
      <Form.Item label="Product Image" name="image">
        <Upload name="image" listType="picture" maxCount={1}>
          <Button icon={<UploadOutlined />}>Upload Image</Button>
        </Upload>
      </Form.Item>
      {/* <ImagePicker
        label="請上傳商品圖片"
        uploadFormatAccept="image/*"
        uploadType="image"
        name="image"
      /> */}

      {/* Slug */}
      <Form.Item
        label="Slug"
        name="slug"
        rules={[{ required: true, message: "Slug is required!" }]}
      >
        <Input placeholder="Enter product slug" />
      </Form.Item>

      {/* Price */}
      <Form.Item
        label="Price"
        name="price"
        rules={[{ required: true, message: "Price is required!" }]}
      >
        <InputNumber
          min={0}
          placeholder="Enter price in NTD"
          style={{ width: "100%" }}
        />
      </Form.Item>

      {/* Description (Not Required) */}
      <Form.Item label="Description" name="desc">
        <Input.TextArea placeholder="Enter product description" rows={4} />
      </Form.Item>

      {/* Submit Button */}
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default CreateProductItem;
