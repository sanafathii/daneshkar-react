import { useState } from "react";
import Input from "./components/input";
import Label from "./components/label";
import "./App.css";

function App() {
  const [length, setLength] = useState(0);

  return (
    <>
      <div className="center">
        <Input onchange={(e) => setLength(e.target.value.length)} />
        <Label length={length} />
      </div>
    </>
  );
}

export default App;
