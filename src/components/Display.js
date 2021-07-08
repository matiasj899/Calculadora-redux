import React from "react";
import { connect } from "react-redux";
const Display = ({ state }) => {
  return (
    <>
      <h2>{state.count}</h2>
    </>
  );
};
function mapStateToProps(state) {
  return {
    state,
  };
}

export default connect(mapStateToProps)(Display);
