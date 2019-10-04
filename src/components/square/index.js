import React, { Component } from "react";
import "./index.scss";

class Square extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: null
    };
  }
  render() {
    return (
      <div className="square" onClick={() => this.setState({ value: "X" })}>
        {this.state.value}
      </div>
    );
  }
}

export default Square;
