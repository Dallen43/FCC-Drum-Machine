import React from "react";
import DrumButton from "./components/DrumButton";
import Toggle from "./components/Toggle";
import Slider from "./components/Slider";
import Viewer from "./components/Viewer";
import "./App.css";

const App = () => {
  return (
    <div>
      Hello World!
      <DrumButton />
      <Toggle />
      <Slider />
      <Viewer />
    </div>
  );
};

export default App;
