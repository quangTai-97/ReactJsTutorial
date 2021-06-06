import React, { Component } from "react";
import Table from "./Table/Table";
import TaskForm from "./Form/TaskForm";
import cryptoRandomString from "crypto-random-string";
import Search from "./Table/Search";
import _ from "lodash";
import * as actions from './../../actions/index';
import {connect} from 'react-redux';
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      taskEditing: null,
      filter: {
        filterName: "",
        filterStatus: -1,
      },
      keyword: "",
    };
  }

  onToggleForm = () => {
    console.log('this.props', this.props);
    this.props.onToggleform();
    //thêm task
    // if (this.state.isDisplayFrom && this.state.taskEditing !== null) {
    //   this.setState({
    //     isDisplayFrom: true,
    //     taskEditing: null,
    //   });
    // } else {
    //   this.setState({
    //     isDisplayFrom: !this.state.isDisplayFrom,
    //     taskEditing: null,
    //   });
    // }
  };

  onCloseForm = () => {
    this.setState({
      isDisplayFrom: false,
    });
  };
  // handleSumbit = (data) => {
  //   var { tasks } = this.state;
  //   data.id = this.generateId();
  //   tasks.push(data);
  //   this.setState({
  //     tasks: tasks,
  //   });
  //   localStorage.setItem("tasks", JSON.stringify(tasks));
  // };

  generateId = () => {
    var id = cryptoRandomString({ length: 10, type: "numeric" });
    return id;
  };
  onUpdateStatus = (id) => {
    var { tasks } = this.state;
    //var index = this.findIndex(id);
    var index = _.findIndex(tasks, (task) => {
      return task.id === id;
    });
    //console.log(index);
    if (index !== -1) {
      tasks[index].status = !tasks[index].status;
      this.setState({
        tasks: tasks,
      });

      localStorage.setItem("tasks", JSON.stringify(tasks));
    }
    this.onCloseForm();
  };

  //FIND INDEX
  findIndex = (id) => {
    var { tasks } = this.state;
    var result = -1;
    tasks.forEach((task, index) => {
      if (task.id === id) {
        result = index;
      }
    });
    return result;
  };

  //DELET RECORD
  onDelete = (id) => {
    const { tasks } = this.state;
    const index = this.findIndex(id);
    if (index !== -1) {
      tasks.splice(index, 1);
      this.setState({
        tasks: tasks,
      });

      localStorage.setItem("tasks", JSON.stringify(tasks));
    }
  };

  //UPDATE FORM
  onUpdate = (id) => {
    var { tasks } = this.state;
    var index = this.findIndex(id);
    console.log(index);
    var taskEditing = tasks[index];
    this.setState({
      taskEditing: taskEditing,
    });
    this.onShowForm();
    console.log(this.state.taskEditing);
  };

  //CLOSE FORM REGISTRY
  onShowForm = () => {
    this.setState({
      isDisplayFrom: true,
    });
  };

  //UPDATE  FORM
  onUpdateData = (data) => {
    var { tasks } = this.state;
    var index = this.findIndex(data.id);
    tasks[index] = data;

    this.setState({
      tasks: tasks,
    });
    localStorage.setItem("tasks", JSON.stringify(tasks));
  };

  onSearch = (filterName, filterStatus) => {
    this.setState({
      filter: {
        filterStatus: filterStatus,
        filterName: filterName.toLowerCase(),
      },
    });
  };

  onSearchKeyword = (data) => {
    this.setState({
      keyword: data,
    });
  };
  render() {
    var {  taskEditing, filter, keyword } = this.state;
    var {isDisplayForm} = this.props;

    
    // if (filter) {
    //   if (filter.filterName) {
    //     tasks = tasks.filter((task) => {
    //       return task.name.toLowerCase().indexOf(filter.filterName) !== -1;
    //     });
    //   }

    //   tasks = tasks.filter((task) => {
    //     if (filter.filterStatus === -1) {
    //       console.log("data -1 " + filter.filterStatus);
    //       return task;
    //     } else {
    //       console.log("data orther" + filter.filterStatus);
    //       return task.status === (filter.filterStatus === 1 ? true : false);
    //     }
    //   });
    // }
    // if (keyword) {
    //   tasks = _.filter(tasks, (task) => {
    //     return task.name === keyword;
    //   });

    // }
    var elmTaskForm = isDisplayForm === true ? (
      <TaskForm
        onCloseForm={this.onCloseForm}
       // handleSumbit={this.handleSumbit}
        task={taskEditing}
        onUpdatedata={this.onUpdateData}
      />
    ) : (
      ""
    );
    return (
      <div className="container">
        <div className="text-center">
          <h1>Quản lý người dùng</h1>
        </div>
        <div className="row">
          <div
            className={
              isDisplayForm === true ? "col-xs-4 col-sm-4 col-md-4 col-lg-4" : ""
            }
          >
            {elmTaskForm}
          </div>
          <div
            className={
              isDisplayForm === true
                ? "col-xs-8 col-sm-8 col-md-8 col-lg-8"
                : "col-xs-12 col-sm-12 col-md-12 col-lg-12"
            }
          >
            <div style={{ float: "left" }}>
              <button
                type="button"
                className="btn btn-primary btn-md"
                onClick={this.onToggleForm}
              >
                Thêm mới
              </button>
            </div>

            <br />

            {/* Search */}

            <Search onSearchKeyword={this.onSearchKeyword} />
            <br />
            {/* Table */}
            <div>
              <Table
                //  tasks={tasks}
                onUpdateStatus={this.onUpdateStatus}
                onDelete={this.onDelete}
                onUpdate={this.onUpdate}
                onSearch={this.onSearch}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

 const mapStateToProps = (state) => {
   console.log('state mapStateToProps',state);
  return {
    //state của store;
    isDisplayForm : state.isDisplayForm
  }
}
const mapDispatchToProps = (dispatch, props) => {
  return {
    onToggleform:() =>{

      dispatch(actions.toggleForm());
    },
    
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Home);
