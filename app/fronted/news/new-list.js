import Image from "next/image";
import Link from "next/link";
import { DUMMY_NEWS } from "@/dummy-news";
export default function NewList({ news }) {
  return (
    <>
      {news.map((item, idx) => (
        <div key={idx} className="list">
          <div class="update-date">
            <div class="year">{item.date.split("-")[0]}</div>
          </div>
          <div className="img w-[269px] h-[180px] overflow-hidden flex items-center justify-center">
            <Image
              className="object-over"
              alt={item.title || "Image"} // Fallback alt if title is undefined
              width={269}
              height={180}
              src={`/${item.image}`} // Ensure item.image is a valid URL or path
              priority={true} // Optional: add priority if the image is critical for the layout
            />
          </div>
          <div className="list_content">
            <div>
              <span className="date">{item.date}</span>
              <span className="class">品牌誌｜產品體驗分享</span>
            </div>
            {/* <div> */}
            <Link
              href={`/news/${item.date.split("-")[0]}/${item.slug}`}
              className="title"
            >
              {item.title}
            </Link>
            <p>{item.content.slice(0, 100)}...</p>
            <Link
              href={`/news/${item.date.split("-")[0]}/${item.slug}`}
              className="narrow dark-color"
            >
              <span>View More </span>
              <span className="right-line"></span>
            </Link>
          </div>
        </div>
      ))}
    </>
  );
}