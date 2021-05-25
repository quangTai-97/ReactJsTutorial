import React, { Component } from "react";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      keyword: "",
    };
  }
  onChange = (event) => {
    var target = event.target;
    var name = target.name;
    var value = target.value;
    this.setState({
      [name]: value,
    });
  };
  onSearch = () => {
    console.log("keyword" + this.state.keyword);
    this.props.onSearchKeyword(this.state.keyword);
  };
  render() {
    return (
      <div className="col-6">
        <div className="input-group">
          <input
            name="keyword"
            type="text"
            value={this.state.keyword}
            onChange={this.onChange}
            className="form-control"
            placeholder="Nhập từ khoá..."
          />
          <span className="input-group-btn"></span>
          <button
            type="button"
            className="btn btn-primary"
            onClick={this.onSearch}
          >
            Tìm kiếm
          </button>
        </div>
      </div>
    );
  }
}

export default Search;
