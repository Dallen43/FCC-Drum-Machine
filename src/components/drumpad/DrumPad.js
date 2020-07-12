import React from "react";
import DrumButton from "./DrumButton";

const DrumPad = ({ sounds }) => {
  return (
    <section className="drumpad-container border border-black">
      <div className="drum-pad grid gap-4 grid-cols-3 grid-rows-3">
        {sounds.map((sound) => (
          <DrumButton key={sound.sound_id} value={sound.sound_name} />
        ))}
      </div>
    </section>
  );
};

export default DrumPad;
