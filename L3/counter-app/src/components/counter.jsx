import React, { Component } from "react";

class Counter extends Component {
  componentDidUpdate(prevProps,prevSate){
   //call ajax
   console.log('prevProps',prevProps);
   console.log('prevSate',prevSate);
   if(prevProps.counter.value !== this.props.counter.value)
   {
     //ajax call and get new data from the server
   }
  }
  componentDidMount(){

  }
  componentWillUnmount(){
    //trước khi xoá thành phần khỏi DOM
    //thực hiện dọn dẹp trc khi xoá
    //timer
    //listion
    console.log('Counter-unmount');
  }
  state = {
    value: this.props.counter.value,
  };

  handleIncrement = () => {
    this.setState({ value: this.state.value + 1 });
  };

  render() {
    console.log("counter-renderd");
    return (
      <div>
        <h4> {this.props.id}</h4>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
        //  onClick={this.handleIncrement}
        onClick = {() =>this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }
  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
