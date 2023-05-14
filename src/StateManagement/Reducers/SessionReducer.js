export const initialSession = {
  isLoggedIn: false,
};

const actions = {
  SET_LOGIN: "SET_LOGIN",
  SET_LOGOUT: "SET_LOGOUT",
  GET_LOGIN: "GET_LOGIN",
};

export function SessionReducer(state, action) {
  const { type, payload } = action;

  switch (type) {
    case actions.SET_LOGIN:
      const newState = {
        ...state,
        isLoggedIn: payload,
      };
      console.log("new State", newState);
      return newState;

    case actions.SET_LOGOUT:
      console.log("logout ", payload);

      return {
        ...state,
        isLoggedIn: payload,
      };
    case actions.GET_LOGIN:
      console.log("Login state is:", state);
      return state;
    default:
      return state;
  }
}
