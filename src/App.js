import React, { useState, useEffect } from "react";
import DrumPad from "./components/drumpad/DrumPad";
import Toggle from "./components/Toggle";
import Slider from "./components/Slider";
import Viewer from "./components/Viewer";

const App = () => {
  const [sounds, setSounds] = useState([
    { sound_id: "1", sound_name: "Q" },
    { sound_id: "2", sound_name: "W" },
    { sound_id: "3", sound_name: "E" },
    { sound_id: "4", sound_name: "A" },
    { sound_id: "5", sound_name: "S" },
    { sound_id: "6", sound_name: "D" },
    { sound_id: "7", sound_name: "Z" },
    { sound_id: "8", sound_name: "X" },
    { sound_id: "9", sound_name: "C" },
  ]);

  return (
    <div className="app-container container mx-auto">
      Hello World!
      <DrumPad sounds={sounds} />
      <Toggle />
      <Slider />
      <Viewer />
    </div>
  );
};

export default App;
