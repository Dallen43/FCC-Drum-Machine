import React from "react";
import DrumButton from "./DrumButton";

const DrumPad = ({ sounds, clickEvt }) => {
  return (
    <section className="drumpad-container border border-black max-w-xl mx-auto">
      <div className="drum-pad flex flex-wrap -m-2 p-6 justify-center">
        {sounds.map((sound) => (
          <DrumButton
            key={sound.sound_id}
            value={sound.sound_name}
            clickEvt={clickEvt}
            soundId={sound.sound_id}
            soundClip={sound.sound_url}
          />
        ))}
      </div>
    </section>
  );
};

export default DrumPad;
