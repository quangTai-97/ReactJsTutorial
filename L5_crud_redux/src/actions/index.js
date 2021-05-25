import * as types from "./../constants/ActionType";

export const listAll = () => {
  return {
    type: types.LIST_ALL,
  };
};

export const addTask = (task) => {
  return {
    type: types.ADDTASK,
    task, //task: task
  };
};
