import React, { useState, useEffect } from "react";
import DrumPad from "./components/drumpad/DrumPad";
import Toggle from "./components/Toggle";
import Slider from "./components/Slider";
import Viewer from "./components/Viewer";

const soundBank1 = [
  {
    sound_id: "Heater-1",
    sound_keyText: "Q",
    sound_url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
  },
  {
    sound_id: "Heater-2",
    sound_keyText: "W",
    sound_url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
  },
  {
    sound_id: "Heater-3",
    sound_keyText: "E",
    sound_url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
  },
  {
    sound_id: "Heater-4",
    sound_keyText: "A",
    sound_url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
  },
  {
    sound_id: "Clap",
    sound_keyText: "S",
    sound_url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
  },
  {
    sound_id: "Open-HH",
    sound_keyText: "D",
    sound_url: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
  },
  {
    sound_id: "Kick-n'-Hat",
    sound_keyText: "Z",
    sound_url: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
  },
  {
    sound_id: "Kick",
    sound_keyText: "X",
    sound_url: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
  },
  {
    sound_id: "Closed-HH",
    sound_keyText: "C",
    sound_url: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
  },
];

const soundBank2 = [
  {
    sound_keyText: "Q",
    sound_id: "Chord-1",
    sound_url: "https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3",
  },
  {
    sound_keyText: "W",
    sound_id: "Chord-2",
    sound_url: "https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3",
  },
  {
    sound_keyText: "E",
    sound_id: "Chord-3",
    sound_url: "https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3",
  },
  {
    sound_keyText: "A",
    sound_id: "Shaker",
    sound_url:
      "https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3",
  },
  {
    sound_keyText: "S",
    sound_id: "Open-HH",
    sound_url: "https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3",
  },
  {
    sound_keyText: "D",
    sound_id: "Closed-HH",
    sound_url: "https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3",
  },
  {
    sound_keyText: "Z",
    sound_id: "Punchy-Kick",
    sound_url: "https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3",
  },
  {
    sound_keyText: "X",
    sound_id: "Side-Stick",
    sound_url: "https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3",
  },
  {
    sound_keyText: "C",
    sound_id: "Snare",
    sound_url: "https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3",
  },
];

const App = () => {
  const [sounds, setSounds] = useState(soundBank1);

  // Figure out how not to play a sound on initial load (changing intial state to 0 breaks this though as useEffect runs before the program is ready). Figured out a hack, see comment within UseEffect hook
  const [buttonDown, setButtonDown] = useState(null);
  const [volume, setVolume] = useState(1.0);
  const [powerOn, setPowerOn] = useState(true);

  useEffect(() => {
    if (!powerOn) {
      return;
    }
    const soundClip = sounds.filter((clip) => {
      return clip.sound_keyText === buttonDown;
    })[0];
    // Must be a more elegant way of handling not playing a sound on initial load
    if (!soundClip) {
      return;
    }
    const audioHandler = document.getElementById(soundClip.sound_id);
    // Set volume based on slider value
    audioHandler.volume = volume;
    audioHandler.play();
  }, [buttonDown]);

  // for testing - giving weird error where the first click of the on/off button is missed and gives an error. All subsequent clicks work...?
  useEffect(() => {
    console.log("Power is: " + powerOn);
  }, [powerOn]);

  return (
    <div className="app-container container mx-auto">
      <h1 className="text-center my-4 font-bold text-3xl uppercase underline">
        Drum Pad
      </h1>
      <DrumPad sounds={sounds} clickEvt={(btnKey) => setButtonDown(btnKey)} />
      <div className="grid md:grid-cols-3 gap-2">
        <div className="m-auto">
          <Toggle
            label={"Power"}
            onPowerChange={(powerOnOff) => setPowerOn(powerOnOff)}
          />
        </div>
        <div className="m-auto w-full">
          <Viewer message="Viewer Window" />
          <Slider
            initialSize={"50"}
            minSize={"0"}
            maxSize={"100"}
            setVol={(vol) => setVolume(vol)}
          />
        </div>
        <div className="m-auto">
          <Toggle label={"Bank"} enabled={false} />
        </div>
      </div>
    </div>
  );
};

export default App;
