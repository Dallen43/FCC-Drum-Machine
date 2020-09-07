import React, { useState } from "react";
import "../App.css";

const Slider = ({ initialSize, minSize, maxSize, getSliderValue }) => {
  const [currentValue, setCurrentValue] = useState(initialSize);

  return (
    <div className="mx-4 my-2 px-4 py-2 text-center">
      <input
        type="range"
        name="slider"
        min={minSize}
        max={maxSize}
        defaultValue={currentValue}
        onChange={(e) => setCurrentValue(e.target.value)}
        step="1"
        className="slider-bar"
      ></input>
      <div className="mt-6">
        <output className="px-4 font-bold" for="slider">
          Volume:{currentValue}%
        </output>
      </div>
    </div>
  );
};

export default Slider;
