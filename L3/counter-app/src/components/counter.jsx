import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    imgaeUrl: "https://picsum.photos/200",
    tags: ["tag1", "tag2", "tag3"],
  };

  render() {
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatcount()}</span>
        <button className="btn btn-secondary btn-sm">Increment</button>
        <ul>
          {this.state.tags.map((tag, index) => (
            <li key={index}>{tag}</li>
          ))}
        </ul>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatcount() {
    const { count } = this.state;

    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
