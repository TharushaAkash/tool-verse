export default function FilterButtons({ selected, onSelect }) {
  return (
    <div className="filter-buttons">
      <button className={selected === null ? "active" : ""} onClick={() => onSelect(null)}>All</button>
      <button className={selected === "Image" ? "active" : ""} onClick={() => onSelect("Image")}>Image</button>
      <button className={selected === "Video" ? "active" : ""} onClick={() => onSelect("Video")}>Video</button>
      <button className={selected === "Document" ? "active" : ""} onClick={() => onSelect("Document")}>Document</button>
      <button className={selected === "Writing" ? "active" : ""} onClick={() => onSelect("Writing")}>Writing</button>
      <button className={selected === "Development" ? "active" : ""} onClick={() => onSelect("Development")}>Development</button>
    </div>
  );
}