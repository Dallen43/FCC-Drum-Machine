import React from "react";

const DrumButton = ({ key, value }) => {
  return (
    <div className="drum-button" key={key}>
      {value}
    </div>
  );
};

export default DrumButton;
