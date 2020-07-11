import React, { useState, useEffect } from "react";
import DrumPad from "./components/drumpad/DrumPad";
import Toggle from "./components/Toggle";
import Slider from "./components/Slider";
import Viewer from "./components/Viewer";
import "./App.css";

const App = () => {
  const [sounds, setSounds] = useState([
    { sound_id: "1", sound_name: "A" },
    { sound_id: "2", sound_name: "B" },
    { sound_id: "3", sound_name: "C" },
    { sound_id: "4", sound_name: "D" },
    { sound_id: "5", sound_name: "E" },
    { sound_id: "6", sound_name: "F" },
    { sound_id: "7", sound_name: "G" },
    { sound_id: "8", sound_name: "H" },
    { sound_id: "9", sound_name: "I" },
    { sound_id: "10", sound_name: "J" },
    { sound_id: "11", sound_name: "K" },
    { sound_id: "12", sound_name: "L" },
  ]);

  return (
    <div className="app-container">
      Hello World!
      <DrumPad sounds={sounds} />
      <Toggle />
      <Slider />
      <Viewer />
    </div>
  );
};

export default App;
