import React from "react";

const Toggle = ({ label }) => {
  return (
    <div className="inline-flex flex-col items-center text-lg uppercase underline m-4 p-4">
      <div className="text-center font-semibold">{label}</div>
      <div className="flex bg-gray-500 w-32 h-16 rounded-full items-center p-2">
        <div className="bg-gray-200 rounded-full w-12 h-12"></div>
      </div>
    </div>
  );
};

export default Toggle;
