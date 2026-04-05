import Navbar from "./components/navbar";
import ToolCard from "./components/toolCard";
import { tools } from "./tools/tools";
import "../src/styles/App.css";

export default function App() {
  return (
    <div className="app">
      <Navbar />

      <div className="grid">
        {tools.map((tool, ) => (
          <ToolCard key={tool.id} tool={tool} />
        ))}
      </div>
    </div>
  );
}