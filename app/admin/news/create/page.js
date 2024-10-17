"use client";
import React, { useState } from "react";
import { Form, Input, Button, Upload, InputNumber } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { uploadProduct } from "@/lib/actions";
import TinyMCEEditor from "@/components/tinymce";

const CreateProductItem = () => {
  const [pending, setPending] = useState(false);
  const [fileList, setFileList] = useState([]);
  const [contentValue, setContentValue] = useState("");
  // Handle the file change event
  const handleChange = ({ fileList }) => {
    setFileList(fileList); // Update the state when fileList changes
  };
  const handleSubmit = (values) => {
    setPending(true);
    const formData = new FormData();
    formData.append("title", values.title);
    formData.append("content", contentValue);
    formData.append("image", values.image.file.originFileObj);
    // 或者使用 for...of 迴圈
    for (const [key, value] of formData.entries()) {
      console.log(`${key}:`, value);
    }
    return;
    uploadProduct(formData);
    setTimeout(() => {
      setPending(false);
    }, 1000);
  };

  const onEditorChange = (value) => {
    setContentValue(value);
  };

  return (
    <Form
      name="news_form"
      layout="vertical"
      onFinish={handleSubmit}
      initialValues={{ price: 0 }}
    >
      {/*Title */}
      <Form.Item
        label="標題名稱"
        name="title"
        rules={[{ required: true, message: "Title text is required!" }]}
      >
        <Input placeholder="標題名稱" />
      </Form.Item>

      {/* Image Upload */}
      <Form.Item label="顯示圖片" name="image">
        <Upload
          name="image"
          listType="picture"
          maxCount={1}
          multiple={false}
          fileList={fileList}
          showUploadList={true}
          accept="image/png,image/gif,image/jpeg"
          onChange={handleChange}
        >
          <Button icon={<UploadOutlined />}>Upload Image</Button>
        </Upload>
      </Form.Item>
      <Form.Item>
        <TinyMCEEditor onEditorChange={onEditorChange} />
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
