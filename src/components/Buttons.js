import React from "react";
import { connect } from "react-redux";
const Buttons = (props) => {
  const dispatch = props.dispatch;
  function equal() {
    dispatch({ type: "EQUAL" });
  }
  function btnNumber(e) {
    const value = e.target.value;
    dispatch({ type: "NUMBER", payload: value });
  }
  function clear() {
    dispatch({ type: "CLEAR" });
  }
  return (
    <>
      <div className="buttons">
        <div className="left-buttons">
          <button value="clear" onClick={clear}>
            C
          </button>
          <button value="/" onClick={btnNumber}>
            /
          </button>
          <button value="*" onClick={btnNumber}>
            X
          </button>

          <button onClick={btnNumber} value="7">
            7
          </button>
          <button onClick={btnNumber} value="8">
            8
          </button>
          <button onClick={btnNumber} value="9">
            9
          </button>

          <button onClick={btnNumber} value="4">
            4
          </button>
          <button onClick={btnNumber} value="5">
            5
          </button>
          <button onClick={btnNumber} value="6">
            6
          </button>
          <button onClick={btnNumber} id="1" value="1">
            1
          </button>
          <button onClick={btnNumber} id="2" value="2">
            2
          </button>
          <button onClick={btnNumber} value="3">
            3
          </button>
          <button onClick={btnNumber} value="0">
            0
          </button>
          <button onClick={btnNumber} value=".">
            .
          </button>
          <div className="space"></div>
        </div>

        <div className="right-buttons">
          <button className="menos" value="-" onClick={btnNumber}>
            -
          </button>
          <button className="mas" value="+" onClick={btnNumber}>
            +
          </button>
          <button className="igual" onClick={equal}>
            =
          </button>
        </div>
      </div>
    </>
  );
};

export default connect()(Buttons);
