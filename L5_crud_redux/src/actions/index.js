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

export const toggleForm = () => {
  return {
    type: types.TOGGLE_FORM,

  };
};

export const openForm = () => {
  return {
    type: types.OPEN_FROM,

  };
};

export const closeForm = () => {
  return {
    type: types.CLOSE_FROM,

  };
};

