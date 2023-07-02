import React from "react";
import Choice from "../Choice";

const Main = () => {
  return (
    <div className="d-flex wrap  flex-column justify-content-center align-items-center">
      <h2 className="main-hd">Make a choice</h2>
      <Choice />
    </div>
    <div class="main-an-wr">
      <div class="main-an-1"></div>
      <div class="main-an-2"></div>
    </div>
  );
};

export default Main;
