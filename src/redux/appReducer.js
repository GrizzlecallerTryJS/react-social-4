import { _setInit } from "./Func/appFunc/appFunc";

const SET_INIT = "SET_INIT";

const initialState = {
  initState: false,
};

const appReducer = (state = initialState, action) => {
  let stateCopy = { ...state };
  switch (action.type) {
    case SET_INIT:
      _setInit(stateCopy, action.initState);
      return stateCopy;
    default:
      return state;
  }
};

export const setInitAC = (initState) => {
  return {
    type: SET_INIT,
    initState,
  };
};

export default appReducer;
