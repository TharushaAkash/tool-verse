import { useState } from "react";
import Navbar from "./components/navbar";
import ToolCard from "./components/toolCard";
import FilterButtons from "./components/filterButtons";
import { tools } from "./tools/tools";
import "../src/styles/App.css";
import "./styles/filterBtn.css";
import AIVerseButton from "./components/AIVerseButton";

export default function App() {

  const [selected, setSelected] = useState(null);
  const filtered = selected ? tools.filter(t => t.category === selected) : tools;
  return (
    <div className="app">
      <Navbar />

      <FilterButtons selected={selected} onSelect={setSelected} />

      <div className="grid">
        {filtered.map((tool,) => (
          <ToolCard key={tool.id} tool={tool} />
        ))}
      </div>

      <AIVerseButton />

    </div>
  );
}