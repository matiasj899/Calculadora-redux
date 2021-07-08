import React from "react";
import Display from "./Display";
import Buttons from "./Buttons";

const Calculadora = () => {
  return (
    <div id="calc-container">
      <div className="display">
        <Display></Display>
      </div>
      <Buttons></Buttons>
    </div>
  );
};

export default Calculadora;
