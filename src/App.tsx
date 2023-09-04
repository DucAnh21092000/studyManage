import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import FoldCard from "./components/foldCard/FoldCard";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="root">
      <FoldCard title="Hello">nàbhbhbhwbehwbhe</FoldCard>
    </div>
  );
}

export default App;
