export default function ArchiveLayout({ archive, latest }) {
  return (
    <div>
      <h1>News</h1>
      <div>{archive}</div>
      <div>{latest}</div>
    </div>
  );
}
