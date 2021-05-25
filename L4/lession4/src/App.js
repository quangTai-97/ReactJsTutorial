import React, { Component } from "react";
import "./App.css";
import ColorPicker from "./components/colorPicker";
import SizeSetting from "./components/sizeSetting";
import Result from "./components/result";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      colorSize: {
        color: "red",
        fontSize: 12,
      },
    };
  }
  fixSize = (data) => {
    const { colorSize } = this.state;
    if (
      this.state.colorSize.fontSize + data >= 12 &&
      this.state.colorSize.fontSize + data <= 36
    ) {
      colorSize.fontSize = this.state.colorSize.fontSize + data;
      this.setState({
        colorSize: colorSize,
        // colorSize: {
        //   fontSize: this.state.colorSize.fontSize + data,
        //   color:this.state.color
        // },
      });
    }
  };
  changeColor = (data) => {
    var { colorSize } = this.state;
    colorSize.color = data;
    this.setState({
      colorSize: colorSize,
    });
  };
  resetVal = (data) => {
    if (data) {
      this.setState({
        colorSize: {
          color: "red",
          fontSize: 12,
        },
      });
    }
  };
  render() {
    return (
      <div>
        <div className="container mt-5 ">
          <div className="row mb-5">
            <div className="col-xs-6 col-md-6 col-sm-6">
              <ColorPicker
                colorSize={this.state.colorSize}
                changeColor={this.changeColor}
              />
            </div>
            <div className="col-xs-6 col-md-6 col-sm-6">
              <SizeSetting
                colorSize={this.state.colorSize}
                fixSize={this.fixSize}
                resetVal={this.resetVal}
              />
            </div>
          </div>
          <div>
            <Result colorSize={this.state.colorSize} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
