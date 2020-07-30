import React, { useState } from "react";

const Toggle = ({ label, enabled = true }) => {
  const [isenabled, setIsenabled] = useState(enabled);

  //Seems to be an issue (in Chrome I think) whereby rapid clicking of the toggle can make the colour transition get missed? Seems to be ok as long as the transition time is short...
  //TODO: Move the toggle classes into main css file (through tailwind) just called toggle-on & toggle-off
  return (
    <div className="inline-flex flex-col items-center text-lg uppercase underline m-4 p-4">
      <label className="text-center font-semibold">{label}</label>
      <div
        onClick={() => setIsenabled(!isenabled)}
        className={
          isenabled
            ? "flex w-32 h-16 rounded-full items-center p-2 justify-end transition-colors duration-100 ease-in bg-green-600 cursor-pointer"
            : "flex w-32 h-16 rounded-full items-center p-2 justify-start transition-colors duration-100 ease-in bg-red-600 cursor-pointer"
        }
      >
        <div className="bg-gray-200 rounded-full w-12 h-12"></div>
      </div>
    </div>
  );
};

export default Toggle;
