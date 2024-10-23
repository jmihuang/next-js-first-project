"use client";
import React, { useState } from "react";
import { createPost } from "@/actions/create-post";
import { useFormStatus, useFormState } from "react-dom";
import TinyMCEEditor from "@/components/tinymce";

const NewsForm = () => {
  const [state, formAction] = useFormState(createPost, {});
  const [content, setContent] = useState("");

  const SubmitButton = () => {
    const { pending } = useFormStatus();
    return (
      <button type="submit" disabled={pending}>
        {pending ? "Submitting" : "Submit"}
      </button>
    );
  };

  return (
    <form action={formAction}>
      {" "}
      {/* Change to onSubmit */}
      {/* Title */}
      <div>
        <label htmlFor="title">標題名稱</label>
        <input id="title" name="title" placeholder="標題名稱" required />
      </div>
      {/* Image Upload */}
      <div>
        <label htmlFor="image">顯示圖片</label>
        <input type="file" id="image" name="image" accept="image/*" required />
      </div>
      {/* TinyMCE Editor */}
      <div>
        <label htmlFor="content">內容</label>
        <TinyMCEEditor
          onEditorChange={(newContent) => setContent(newContent)}
        />
        <input type="hidden" name="content" value={content} />
      </div>
      {/* Submit Button */}
      <SubmitButton />
      {state.errors && (
        <ul>
          {state.errors.map((error) => (
            <li className="text-red-500">{error}</li>
          ))}
        </ul>
      )}
    </form>
  );
};

export default NewsForm;
