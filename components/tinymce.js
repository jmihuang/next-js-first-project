"use client";
import { useRef } from "react";
import { Editor } from "@tinymce/tinymce-react";
const apiKey = process.env.NEXT_PUBLIC_API_KEY;
const TinyMCEEditor = ({ onEditorChange }) => {
  const editorRef = useRef(null);
  return (
    <>
      <Editor
        apiKey={apiKey}
        onInit={(_evt, editor) => (editorRef.current = editor)}
        onEditorChange={onEditorChange}
        id="news_form_content"
        init={{
          height: 500,
          menubar: false,
          plugins: [
            "advlist",
            "autolink",
            "lists",
            "link",
            "image",
            "charmap",
            "preview",
            "anchor",
            "searchreplace",
            "visualblocks",
            "code",
            "fullscreen",
            "insertdatetime",
            "media",
            "table",
            "code",
            "help",
            "wordcount",
          ],
          toolbar:
            "undo redo | blocks | " +
            "bold italic forecolor | alignleft aligncenter " +
            "alignright alignjustify | bullist numlist outdent indent | " +
            "removeformat | help",
          content_style:
            "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
        }}
      />
    </>
  );
};

export default TinyMCEEditor;
