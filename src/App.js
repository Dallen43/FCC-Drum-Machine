import React from "react";
import DrumPad from "./components/drumpad/DrumPad";
import Toggle from "./components/Toggle";
import Slider from "./components/Slider";
import Viewer from "./components/Viewer";
import "./App.css";

const App = () => {
  return (
    <div>
      Hello World!
      <DrumPad />
      <Toggle />
      <Slider />
      <Viewer />
    </div>
  );
};

export default App;
