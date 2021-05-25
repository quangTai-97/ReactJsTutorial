import { combineReducers } from "redux";
import tasks from "./tasks";

const myReducers = combineReducers({
  tasks, //tasks:tasks
});

export default myReducers;
