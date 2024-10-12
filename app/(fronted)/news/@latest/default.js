import NewsList from "@/app/(fronted)/news/new-list";

export default async function LatestNewsPage() {
  const response = await fetch("http://localhost:8080/news");
  if (!response.ok) {
    throw new Error("Fail to fetch news");
  }

  const news = await response.json();

  return (
    <>
      <h5>You May Also Be Interested</h5>
      <div className="latest">
        <NewsList news={news} />
      </div>
    </>
  );
}
