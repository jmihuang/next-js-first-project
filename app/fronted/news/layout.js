export default function ArchiveLayout({ filterLink, archive, latest }) {
  return (
    <div>
      <h1>News</h1>
      <div>{filterLink}</div>
      <div>{archive}</div>
      <div>{latest}</div>
    </div>
  );
}
