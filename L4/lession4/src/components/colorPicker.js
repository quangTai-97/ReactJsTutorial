import React, { Component } from "react";

class ColorPicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: ["red", "blue", "green", "yellow"],
    };
  }
  changeColor = (data) => {
    this.props.changeColor(data);
  };
  showcolor(color) {
    return {
      backgroundColor: color,
    };
  }
  myStyle(color) {
    return {
      padding: "17px",
      margin: "5px",
      backgroundColor: color,
    };
  }
  render() {
    var elmentColor = this.state.color.map((color, index) => {
      return (
        <button
          key={index}
          className={
            this.props.colorSize.color === color ? "btn active" : "btn"
          }
          style={this.myStyle(color)}
          onClick={() => this.changeColor(color)}
        ></button>
      );
    });
    return (
      <div>
        <div className="card">
          <div className="card-header text-white bg-primary mb-3">
            Color Picker
          </div>
          <div className="card-body">{elmentColor}</div>
        </div>
      </div>
    );
  }
}

export default ColorPicker;
