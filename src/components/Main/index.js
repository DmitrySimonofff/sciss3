import React from "react";
import Choice from "../Choice";

const Main = () => {
  return (
    <div className="d-flex wrap  flex-column justify-content-center align-items-center">
      <h2 className="main-hd">Make a choice</h2>
      <Choice />
    </div>
  );
};

export default Main;
