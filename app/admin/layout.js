import "@/app/globals.css";
import "@/app/assets/materialize.css";
import "@/app/assets/style.css";
import MainHeader from "@/components/main-header/main-header";

export default function AdminLayout({ children }) {
  return (
    <>
      <h1>Admin</h1>
      <main className="container">{children}</main>
    </>
  );
}
