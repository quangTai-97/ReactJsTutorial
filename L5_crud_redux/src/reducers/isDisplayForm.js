import * as types from "./../constants/ActionType";



var inittialState = false; //close form



var isDisplayForm = (state = inittialState, action) => {
    
   // console.log('action isDisplayfrom:',action);
   //console.log('state isDisplayfrom:',state);
  switch (action.type) {
     
    case types.TOGGLE_FORM:
        return !state;

    case types.OPEN_FROM:
        state = true;
        return state;

    case types.CLOSE_FROM:
        state = false;
        return state;

    default:
      return state;
  };

    
};

export default isDisplayForm;
