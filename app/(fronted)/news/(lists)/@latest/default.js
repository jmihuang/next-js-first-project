import NewsList from "@/app/(fronted)/news/new-list";
import { getLatestNews } from "@/lib/news";

export default async function LatestNewsPage() {
  const news = await getLatestNews();

  return (
    <>
      <h5>Latest News</h5>
      <div className="latest">
        <NewsList news={news} />
      </div>
    </>
  );
}
