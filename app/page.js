import ImageSlideshow from "@/components/slides/image-slideshow";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex gap-10 h-[360px]">
      <div className="flex-none w-[480px] mt-6">
        <ImageSlideshow />
      </div>
      <div className="flex-1">
        <h2>Pure Resource</h2>
        <div>
          <p>Our promise</p>
        </div>
      </div>
    </div>
  );
}
