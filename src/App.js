import React, { useState, useEffect } from "react";
import DrumPad from "./components/drumpad/DrumPad";
import Toggle from "./components/Toggle";
import Slider from "./components/Slider";
import Viewer from "./components/Viewer";

const App = () => {
  const [sounds, setSounds] = useState([
    {
      sound_id: "1",
      sound_name: "Q",
      sound_url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
    },
    {
      sound_id: "2",
      sound_name: "W",
      sound_url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
    },
    {
      sound_id: "3",
      sound_name: "E",
      sound_url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
    },
    {
      sound_id: "4",
      sound_name: "A",
      sound_url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
    },
    {
      sound_id: "5",
      sound_name: "S",
      sound_url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
    },
    {
      sound_id: "6",
      sound_name: "D",
      sound_url: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
    },
    {
      sound_id: "7",
      sound_name: "Z",
      sound_url: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
    },
    {
      sound_id: "8",
      sound_name: "X",
      sound_url: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
    },
    {
      sound_id: "9",
      sound_name: "C",
      sound_url: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
    },
  ]);

  // Figure out how not to play a sound on initial load (changing intial state to 0 breaks this though as useEffect runs before the program is ready)
  const [buttonDown, setButtonDown] = useState("Q");

  useEffect(() => {
    console.log(buttonDown);
    const soundClip = sounds.filter((clip) => {
      return clip.sound_name === buttonDown;
    })[0];
    const audioHandler = document.getElementById(soundClip.sound_id);
    audioHandler.play();
  }, [buttonDown]);

  return (
    <div className="app-container container mx-auto">
      <h1 className="text-center my-4 font-bold text-3xl uppercase underline">
        Drum Pad
      </h1>
      <DrumPad sounds={sounds} clickEvt={(btnKey) => setButtonDown(btnKey)} />
      <div className="grid md:grid-cols-3 gap-2">
        <div className="m-auto">
          <Toggle label={"Test Left"} enabled={false} />
        </div>
        <div className="m-auto w-full">
          <Viewer message="Viewer Window" />
          <Slider initialSize={"50"} minSize={"0"} maxSize={"100"} />
        </div>
        <div className="m-auto">
          <Toggle label={"Test Right"} enabled={false} />
        </div>
      </div>
    </div>
  );
};

export default App;
