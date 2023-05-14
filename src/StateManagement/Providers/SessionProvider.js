import {useReducer } from "react";
import SessionContext from "../SessionContext";

const initialSession = {
  isLoggedIn: false,
};

function SessionReducer(state, action) {
  const { type, payload } = action;

  switch (type) {
    case "SET_LOGIN":
      return {
        ...state,
        isLoggedIn: payload,
      };

    case "SET_LOGOUT":
      return {
        ...state,
        isLoggedIn: payload,
      };

    case "GET_LOGIN":
      return state;

    default:
      return state;
  }
}


const SessionProvider = ({ children }) => {
  const [state, dispatch] = useReducer(SessionReducer, initialSession);

  const setLogin = () => {
    dispatch({ type: "SET_LOGIN", payload: true });
  };


  const getLogin = () => {    
    dispatch({ type: "GET_LOGIN" });
  };

  const setLogout = () => {
    dispatch({ type: "SET_LOGOUT", payload: false });
  };

  const value = {
    loginSession: state,
    setLogin,
    getLogin,
    setLogout,
  };

  return <SessionContext.Provider value={value}>{children}</SessionContext.Provider>;
};

export default SessionProvider;
