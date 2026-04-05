import "../styles/toolCard.css";


export default function ToolCard({ tool }) {
  const openTool = () => {
    window.open(tool.url, "_blank"); 
  };

  return (
    <div className="card" onClick={openTool}>
      <div className="icon"> 
        <img src={tool.icon} alt={tool.name} className="tool-logo" />
      </div>
      <h2>{tool.name}</h2>
      <p>{tool.description}</p>
    </div>
  );
}