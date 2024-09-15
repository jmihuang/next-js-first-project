import Image from "next/image";
import React, { useEffect, useState } from "react";
const uploadTypeAccept = {
  image: ".jpg,.png,.jpeg",
  video: "video/*",
};
function imagePicker({ label, uploadFormatAccept, uploadType, name }) {
  const [pickedImages, setPickedImages] = useState([]);
  const onImageUpload = (event) => {
    const files = event.target.files;
    if (files.length === 0) {
      return;
    }
    const imgsSrc = [];
    Object.keys(files).forEach((key) => {
      const file = files[key];
      const src = window.URL.createObjectURL(file);
      if (!imgsSrc.includes(src)) {
        imgsSrc.push(src);
      }
    });
    setPickedImages([...pickedImages, ...imgsSrc]);
  };

  useEffect(() => {
    console.log(pickedImages);
  }, [pickedImages]);
  return (
    <>
      <label htmlFor={name} className="btn mb-3">
        {label}
        <input
          hidden
          type="file"
          id={name}
          name={name}
          multiple
          accept={uploadFormatAccept || uploadTypeAccept[uploadType]}
          onChange={(event) => {
            onImageUpload && onImageUpload(event);
          }}
          {...(uploadType === "video" && { capture: "environment" })}
        />
      </label>
      <ul>
        {pickedImages.length > 0 &&
          pickedImages.map((item, index) => (
            <li key={index} className="relative w-24 h-24 inline-block mr-4">
              <Image
                src={item}
                alt="The image selected by users"
                layout="fill" // 設置圖片填充模式
                objectFit="cover" // 圖片等比例填滿，裁剪超出部分
                className="rounded-md" // 可以加入圓角或其他樣式
              />
            </li>
          ))}
      </ul>
    </>
  );
}

export default imagePicker;
