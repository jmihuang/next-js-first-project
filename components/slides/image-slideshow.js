"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import classes from "./image-slideshow.module.css";

import slidePic1 from "@/app/assets/image/bath-containers-plant-table.png";
import slidePic2 from "@/app/assets/image/product-branding-pack.png";
import slidePic3 from "@/app/assets/image/product-branding-packaging.png";

const images = [
  { image: slidePic1, alt: "Nature’s finest for radiant, glowing skin" },
  { image: slidePic2, alt: "Pure ingredients for a healthier" },
  { image: slidePic3, alt: "Beauty with our eco-friendly skincare" },
];

export default function ImageSlideshow() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex < images.length - 1 ? prevIndex + 1 : 0
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={classes.slideshow}>
      {images.map((image, index) => (
        <Image
          key={index}
          src={image.image}
          className={index === currentImageIndex ? classes.active : ""}
          alt={image.alt}
        />
      ))}
    </div>
  );
}
