import { DUMMY_NEWS } from "@/dummy-news";
import NewsList from "@/app/fronted/news/new-list";
import { getAvailableNewsYears } from "@/lib/news";

export default function NewsPage() {
  const links = getAvailableNewsYears();
  return (
    <>
      <NewsList news={DUMMY_NEWS} />
    </>
  );
}
