import { combineReducers } from "redux";
import tasks from "./tasks";
import isDisplayForm from './isDisplayForm';

//state có task, isDisplayform
const myReducers = combineReducers({
  tasks, //tasks:tasks
  isDisplayForm // isDisplayForm : isDisplayForm
});

export default myReducers;
