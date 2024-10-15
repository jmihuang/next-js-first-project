import NewsList from "@/app/(fronted)/news/new-list";
import Link from "next/link";
import {
  getAllNews,
  getAvailableNewsMonths,
  getAvailableNewsYears,
  getNewsForYear,
  getNewsForYearAndMonth,
} from "@/lib/news";

export default async function FilteredNewsPage({ params }) {
  const filter = params?.filter || null;
  const selectedYear = filter?.[0] || null;
  const selectedMonth = filter?.[1] || null;
  const availableNewsYears = await getAvailableNewsYears();
  const availableNewsMonths = await getAvailableNewsMonths(selectedYear).sort();

  let loadedNews;
  if (selectedYear && selectedMonth) {
    loadedNews = await getNewsForYearAndMonth(selectedYear, selectedMonth);
  }
  if (selectedYear && !selectedMonth) {
    loadedNews = await getNewsForYear(selectedYear);
  }
  if (!selectedYear && !selectedMonth) {
    loadedNews = await getAllNews();
  }

  if (
    (selectedYear && !availableNewsYears.includes(selectedYear)) ||
    (selectedMonth && !availableNewsMonths.includes(selectedMonth))
  ) {
    throw new Error("Invalid filter");
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
            href="/news/"
            className={`${
              selectedYear === null ? " text-white bold" : ""
            } px-4 py-2 block`}
          >
            ALL
          </Link>
        </li>
        {availableNewsYears.map((item, idx) => (
          <li
            key={idx}
            className={`border-2 mr-4 cursor-pointer ${
              selectedYear === item.year ? "bg-primary" : ""
            }`}
          >
            <Link
              href={`/news/${item.year}`}
              className={`${
                selectedYear === item.year ? " text-white bold" : ""
              } px-4 py-2 block`}
            >
              {item.year}
            </Link>
          </li>
        ))}
      </ul>
      {availableNewsMonths.length > 0 && <h5>Months:</h5>}
      <ul className="flex flex-wrap mb-6">
        {availableNewsMonths.length > 0 &&
          availableNewsMonths.map((link) => (
            <li
              key={link}
              className={`border-2 mr-4 cursor-pointer ${
                selectedMonth === link || availableNewsMonths.length === 1
                  ? "bg-primary"
                  : ""
              }`}
            >
              <Link
                href={`/news/${selectedYear}/${link}`}
                className={`${
                  selectedMonth === link || availableNewsMonths.length === 1
                    ? " text-white bold"
                    : ""
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
