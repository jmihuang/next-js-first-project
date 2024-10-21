import Image from "next/image";
import Link from "next/link";
export default function NewList({ news }) {
  function removeHtmlTags(str) {
    return str.split(/<[^>]*>/).join("");
  }
  return (
    <>
      {news.map((item, idx) => (
        <div key={idx} className="list">
          <div className="update-date">
            <div className="year">{item.date.split("-")[0]}</div>
          </div>
          <div className="img w-[269px] h-[180px] flex-none overflow-hidden flex items-center justify-center">
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
            <Link href={`/news/${item.slug}`} className="title">
              {item.title}
            </Link>
            <p className="line-clamp-2">
              {removeHtmlTags(item.content).slice(0, 100)}
            </p>
            <Link href={`/news/${item.slug}`} className="narrow dark-color">
              <span>View More </span>
              <span className="right-line"></span>
            </Link>
          </div>
        </div>
      ))}
    </>
  );
}
