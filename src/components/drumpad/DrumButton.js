import React from "react";

const DrumButton = ({ value, clickEvt, soundId, soundClip }) => {
  //Need to do it this way because doesn't seem to be any way to centre a tailwind grid
  //See https://tailwindcss.com/components/flexbox-grids/#column-spacing
  //See the DrumPad parent component for the other part of this
  return (
    <div className="drum-button p-2" onClick={() => clickEvt(value)}>
      <div className="flex bg-gray-500 w-32 h-24 justify-center items-center shadow-md rounded-md hover:bg-gray-400 cursor-pointer">
        {value}
        <audio id={soundId} src={soundClip}></audio>
      </div>
    </div>
  );
};

export default DrumButton;
