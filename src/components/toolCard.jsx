import "../styles/toolCard.css";

export default function ToolCard({ tool }) {
  return (
    <div className="card">
      <div className="icon">{tool.icon}</div>
      <h2>{tool.name}</h2>
      <p>{tool.description}</p>
    </div>
  );
}