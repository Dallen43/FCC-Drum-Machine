import React from "react";

const Viewer = ({ message }) => {
  return (
    <div className="h-16 flex justify-center center">
      <h2 className="text-xl font-bold self-center">{message}</h2>
    </div>
  );
};

export default Viewer;
