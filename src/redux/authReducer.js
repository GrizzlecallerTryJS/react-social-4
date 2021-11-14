import { _setAuth } from "./authFunc/authFunc";

const SET_USER_AUTH_DATA = "SET_USER_AUTH_DATA";

const initialState = {
  userData: {
    id: null,
    email: null,
    login: null,
  },
};

const authReducer = (state = initialState, action) => {
  let stateCopy = { ...state };

  switch (action.type) {
    case SET_USER_AUTH_DATA:
      _setAuth(stateCopy, action.userAuth);
      return stateCopy;
    default:
      return state;
  }
};

export const setAuthAC = (userAuth) => {
  return {
    type: SET_USER_AUTH_DATA,
    userAuth,
  };
};

export default authReducer;
