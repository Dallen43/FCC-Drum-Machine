import React from "react";
import DrumButton from "./DrumButton";

const DrumPad = ({ sounds }) => {
  return (
    <section className="drumpad-container">
      <div className="drum-pad">
        {sounds.map((sound) => (
          <DrumButton key={sound.sound_id} value={sound.sound_name} />
        ))}
      </div>
    </section>
  );
};

export default DrumPad;
