import { AuthAPI } from "../../api/api";
import { setAuthAC } from "../authReducer";

export const getAuthTC = () => {
  return (dispatch) => {
    AuthAPI.getAuth().then((data) => {
      if (data.resultCode === 0) {
        dispatch(setAuthAC(data.data));
      }
    });
  };
};

export const loginTC = (data) => (dispatch) => {
  AuthAPI.login(data).then((data) => {
    if (data.resultCode === 0) {
      dispatch(setAuthAC(data.data));
    }
  });
};
