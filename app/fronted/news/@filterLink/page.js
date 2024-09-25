import { getAvailableNewsYears } from "@/lib/news";
import Link from "next/link";

export default function FilterLink() {
  const links = getAvailableNewsYears();
  return (
    <>
      <ul className="flex flex-wrap mb-6">
        <li className="border-2 px-4 py-2 mr-4 cursor-pointer">
          <Link href="/fronted/news/">ALL</Link>
        </li>
        {links.map((link) => (
          <li key={link} className="border-2 px-4 py-2 mr-4 cursor-pointer">
            <Link href={`/fronted/news/${link}`}>{link}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
