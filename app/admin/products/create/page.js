"use client";
import React, { useState } from "react";
import { Form, Input, Button, Upload, InputNumber } from "antd";
import { UploadOutlined } from "@ant-design/icons";

const CreateProductItem = () => {
  const [pending, setPending] = useState(false);
  const [form] = Form.useForm(); // Form instance for possible reset or control
  const [fileList, setFileList] = useState([]);

  // Handle the file change event
  const handleUpload = async ({ fileList: newFileList }) => {
    setFileList(newFileList);
  };

  const coverImageArrayBuffer = async () => {
    const reader = new FileReader();

    // Loop through the fileList and append each file as ArrayBuffer to FormData
    for (const file of fileList) {
      const originFileObj = file.originFileObj; //Get the actual file
      const reader = new FileReader();
      // Use a Promise to handle the asynchronous FileReader operation
      const arrayBuffer = await new Promise((resolve, reject) => {
        reader.onload = (event) => resolve(event.target.result);
        reader.onerror = (error) => reject(error);
        reader.readAsArrayBuffer(file); // Convert file to ArrayBuffer
      });

      formData.append("images", new Blob([arrayBuffer]), file.name);
    }
  };

  const handleSubmit = async (values) => {
    // Convert values to FormData
    const formData = new FormData();
    Object.keys(values).forEach((key) => {
      formData.append(key, values[key]);
    });

    try {
      const response = await fetch("/api/products/create", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error(`Failed to create product: ${response.statusText}`);
      }

      const result = await response.json(); // Parse the JSON response
      console.log("Product created successfully:", result);
      form.resetFields(); // Reset form on success
      setFileList([]); // Clear the fileList state
    } catch (error) {
      console.error("Error creating product:", error);
    }

    setTimeout(() => {
      setPending(false);
    }, 1000);
  };

  return (
    <Form
      form={form}
      name="product_form"
      layout="vertical"
      onFinish={handleSubmit}
      initialValues={{ price: 0 }}
      // encType="multipart/form-data"
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
        <Upload
          name="image"
          listType="picture"
          maxCount={1}
          multiple={false}
          fileList={fileList}
          showUploadList={true}
          accept="image/png,image/gif,image/jpeg"
          onChange={handleUpload}
        >
          <Button icon={<UploadOutlined />}>Upload Image</Button>
        </Upload>
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
        <Button type="primary" htmlType="submit" disabled={pending}>
          {pending ? "Submitting..." : "Submit"}
        </Button>
        {/* <Button type="primary" htmlType="submit" disabled={pending}>
          {pending.toString()}
          {pending ? "Submitting..." : "Submit"}
        </Button> */}
      </Form.Item>
    </Form>
  );
};

export default CreateProductItem;
