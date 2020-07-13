import React from "react";

const DrumButton = ({ key, value }) => {
  //Need to do it this way because doesn't seem to be any way to centre a tailwind grid
  //See https://tailwindcss.com/components/flexbox-grids/#column-spacing
  //See the DrumPad parent component for the other part of this
  return (
    <div className="drum-button p-2" key={key}>
      <div className="flex bg-blue-500 w-32 h-24 justify-center items-center">
        {value}
      </div>
    </div>
  );
};

export default DrumButton;
