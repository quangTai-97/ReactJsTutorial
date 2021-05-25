import React, { Component } from "react";

class Result extends Component {
  render() {
    return (
      <div>
        <span>
          Color: {this.props.colorSize.color} - FontSize:{" "}
          {this.props.colorSize.fontSize + "px"}
        </span>
        <span
          className="form-control mr-2"
          style={{
            color: this.props.colorSize.color,
            border: "1px solid",
            borderColor: this.props.colorSize.color,
            fontSize: this.props.colorSize.fontSize + "px",
          }}
        >
          Nội dung Setting
        </span>
      </div>
    );
  }
}

export default Result;
