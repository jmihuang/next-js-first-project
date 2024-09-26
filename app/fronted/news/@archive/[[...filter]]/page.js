import NewsList from "@/app/fronted/news/new-list";
import Link from "next/link";
import { DUMMY_NEWS } from "@/dummy-news";
import {
  getAvailableNewsMonths,
  getAvailableNewsYears,
  getNewsForYear,
  getNewsForYearAndMonth,
} from "@/lib/news";

export default function FilteredNewsPage({ params }) {
  const filter = params?.filter || null;
  const selectedYear = filter?.[0];
  const selectedMonth = filter?.[1];
  const yearsLinks = getAvailableNewsYears();
  const monthsLinks = getAvailableNewsMonths(selectedYear).sort();
  let loadedNews = [];
  if (selectedYear && selectedMonth) {
    loadedNews = getNewsForYearAndMonth(selectedYear, selectedMonth);
  }
  if (selectedYear && !selectedMonth) {
    loadedNews = getNewsForYear(selectedYear);
  }
  if (!selectedYear && !selectedMonth) {
    loadedNews = getNewsForYear();
  }

  return (
    <>
      <ul className="flex flex-wrap mb-6">
        <li className="border-2 px-4 py-2 mr-4 cursor-pointer">
          <Link href="/fronted/news/">ALL</Link>
        </li>
        {yearsLinks.map((link) => (
          <li key={link} className="border-2 px-4 py-2 mr-4 cursor-pointer">
            <Link href={`/fronted/news/${link}`}>{link}</Link>
          </li>
        ))}
      </ul>
      {monthsLinks.length > 0 && <h5>Months:</h5>}
      <ul className="flex flex-wrap mb-6">
        {monthsLinks.length > 0 &&
          monthsLinks.map((link) => (
            <li key={link} className="border-2 px-4 py-2 mr-4 cursor-pointer">
              <Link href={`/fronted/news/${selectedYear}/${link}`}>{link}</Link>
            </li>
          ))}
      </ul>
      {loadedNews.length > 0 ? (
        <NewsList news={loadedNews} />
      ) : (
        <p>{`${selectedYear ? selectedYear : ""}-${
          selectedMonth ? selectedMonth : ""
        } No Posts!`}</p>
      )}
    </>
  );
}
