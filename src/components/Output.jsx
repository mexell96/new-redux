import React from "react";
import { connect } from "react-redux";

function Output(props) {
  return <div className="outputClass">{props.output}</div>;
}

const mapStateToProps = (state) => ({
  output: state.output,
});

export default connect(mapStateToProps)(Output);
