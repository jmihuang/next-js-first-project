import NewsList from "@/app/fronted/news/new-list";
import Link from "next/link";
import {
  getAvailableNewsMonths,
  getAvailableNewsYears,
  getNewsForYear,
  getNewsForYearAndMonth,
} from "@/lib/news";

export default function FilteredNewsPage({ params }) {
  const filter = params?.filter || null;
  const selectedYear = filter?.[0] || null;
  const selectedMonth = filter?.[1] || null;
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
        <li
          className={`border-2 mr-4 cursor-pointer  ${
            selectedYear === null ? "bg-primary" : ""
          }`}
        >
          <Link
            href="/fronted/news/"
            className={`${
              selectedYear === null ? " text-white bold" : ""
            } px-4 py-2 block`}
          >
            ALL
          </Link>
        </li>
        {yearsLinks.map((link) => (
          <li
            key={link}
            className={`border-2 mr-4 cursor-pointer ${
              +selectedYear === link ? "bg-primary" : ""
            }`}
          >
            <Link
              href={`/fronted/news/${link}`}
              className={`${
                +selectedYear === link ? " text-white bold" : ""
              } px-4 py-2 block`}
            >
              {link}
            </Link>
          </li>
        ))}
      </ul>
      {monthsLinks.length > 0 && <h5>Months:</h5>}
      <ul className="flex flex-wrap mb-6">
        {monthsLinks.length > 0 &&
          monthsLinks.map((link) => (
            <li
              key={link}
              className={`border-2 mr-4 cursor-pointer ${
                +selectedMonth === link ? "bg-primary" : ""
              }`}
            >
              <Link
                href={`/fronted/news/${selectedYear}/${link}`}
                className={`${
                  +selectedMonth === link ? " text-white bold" : ""
                } px-4 py-2 block`}
              >
                {link}
              </Link>
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
