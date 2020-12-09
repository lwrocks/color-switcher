import React, { useState } from "react";
import ColorChange from "./ColorChange";
import "./App.css";

function App() {
  const [color, setColor] = useState("");
  console.log(color, setColor);
  return (
    <div className={"react-root " + color}>
      <div className="centered">
        <h1>Color Picker</h1>
        <ColorChange color="red" setColor={setColor}/>
        <ColorChange color="blue" setColor={setColor}/>
        <ColorChange color="yellow" setColor={setColor}/>
      </div>
    </div>
  );
}

export default App;
