import React, { Component } from "react";
import Square from "../square";
import { Row, Col } from "antd";
import "antd/dist/antd.css";
import "./index.scss";

class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  // clickResponse = index => {
  //   console.log(index);
  //   this.setState({ clickedIndex: index });
  // };

  renderSqaure = () => {
    let board = [],
      row = [];

    for (let i = 0; i < 3; i++) {
      row = [];
      for (let j = 0; j < 3; j++) {
        // console.log("here", j);
        row.push(
          <Col
            className="board_column"
            align="center"
            style={{ padding: 0, margin: 0, cursor: "pointer" }}
            span={8}
            // onClick={() => {
            //   this.clickResponse(i * 3 + j);
            // }}
          >
            <Square value={i * 3 + j} />
          </Col>
        );
      }
      board.push(
        <Row gutter={24} style={{ margin: "0px" }}>
          {row}
        </Row>
      );
    }
    return board;
  };

  render() {
    const status = "Next Player: X";
    return (
      <div>
        <div className="status">{status}</div>
        <div className="board">{this.renderSqaure()}</div>
      </div>
    );
  }
}

export default Board;
