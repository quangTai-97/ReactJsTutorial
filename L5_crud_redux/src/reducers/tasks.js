import * as types from "./../constants/ActionType";
import cryptoRandomString from "crypto-random-string";

var data = JSON.parse(localStorage.getItem("tasks"));
console.log(data);
var inittialState = data ? data : [];

var generateId = () => {
  var id = cryptoRandomString({ length: 10, type: "numeric" });
  return id;
};

var myReducer = (state = inittialState, action) => {
  switch (action.type) {
    case types.LIST_ALL:
      return state;
    case types.ADDTASK:
      var newTask = {
        id: generateId(),
        name: action.task.name,
        status: action.task.status === "true" ? true : false,
        email: action.task.email,
        address: action.task.address,
      };
      state.push(newTask);
      localStorage.setItem("tasks", JSON.stringify(state));
      return [...state];
    
    default:
      return state;
  }
};

export default myReducer;
