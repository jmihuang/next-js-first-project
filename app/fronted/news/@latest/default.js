import NewsList from "@/app/fronted/news/new-list";
import { DUMMY_NEWS } from "@/dummy-news";
export default function LatestNewsPage() {
  return (
    <>
      <h5>You May Also Be Interested</h5>
      <NewsList news={DUMMY_NEWS} />
    </>
  );
}
