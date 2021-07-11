import { useState } from "react";
import { createContext, useEffect, useReducer } from "react";
import AuthReducer from "./AuthReducer";
import { toast, ToastContainer } from "react-toastify";
import { useHistory } from "react-router-dom";
const INITTIAL_STATE = {
  user: JSON.parse(localStorage.getItem("user")) || null,
  isFetching: false,
  error: false,
  actionName: "",
};

export const AuthContext = createContext(INITTIAL_STATE);

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, INITTIAL_STATE);
  const [value, setValue] = useState();
  const history = useHistory();

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(state.user));
  }, [state.user]);
  console.log("AuthContext đã vào", state.actionName);
  useEffect(() => {
    if (state.actionName === "LOGIN_FAILURE") {
      toast.error("Wrong PassWord or Email", {
        autoClose: 5000,
      });
      var location = window.location.reload();
      setTimeout(location, 5000);
    }
  }, [state.actionName]);
  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
      }}
    >
      <ToastContainer />
      {children}
    </AuthContext.Provider>
  );
};
