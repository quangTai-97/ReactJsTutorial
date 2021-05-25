import React, { Component } from "react";

class SizeSetting extends Component {
  constructor(props) {
    super(props);
    this.state = this.props.colorSize;
  }

  // btnGiam = () => {
  //   if (this.state.fontSize > 12) {
  //     this.setState({
  //       fontSize: (parseInt(this.state.fontSize) - 2).toString(),
  //     });
  //   }
  //   this.props.fixSize(this.state);
  // };

  // btnTang = () => {
  //   if (this.state.fontSize < 36) {
  //     this.setState({
  //       fontSize: (parseInt(this.state.fontSize) + 2).toString(),
  //     });
  //   }
  //   this.props.fixSize(this.state);
  // };

  ChangeSize = (data) => {
    this.props.fixSize(data);
  };
  resetVal = () => {
    this.props.resetVal(true);
  };

  render() {
    return (
      <div>
        <div className="card mb-2">
          <div className="card-header text-white bg-danger mb-3">
            Size: {this.props.colorSize.fontSize}px
          </div>
          <div className="card-body">
            <button
              className=" btn btn-success"
              onClick={() => this.ChangeSize(-2)}
            >
              Giảm
            </button>{" "}
            &nbsp;
            <button
              className=" btn btn-success"
              onClick={() => this.ChangeSize(2)}
            >
              {" "}
              Tăng
            </button>{" "}
            &nbsp;
          </div>
        </div>
        <button className=" btn btn-primary" onClick={this.resetVal}>
          {" "}
          Reset
        </button>{" "}
        &nbsp;
      </div>
    );
  }
}

export default SizeSetting;
