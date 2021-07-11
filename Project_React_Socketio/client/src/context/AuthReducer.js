const AuthReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN_START":
      return {
        user: null,
        isFetching: true,
        error: false,
        actionName: "",
      };

    case "LOGIN_SUCCESS":
      return {
        user: action.payload,
        isFetching: false,
        error: true,
        actionName: "",
      };
    case "LOGIN_FAILURE":
      return {
        user: null,
        isFetching: true,
        error: false,
        actionName: "LOGIN_FAILURE",
      };
    default:
      break;
  }
};
export default AuthReducer;
