import React from "react";

const DrumButton = ({ key, value }) => {
  return (
    <div className="drum-button bg-blue-500 w-1/3 h-1/3" key={key}>
      {value}
    </div>
  );
};

export default DrumButton;
