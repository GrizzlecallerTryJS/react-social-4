import { AuthAPI } from "../../api/api";
import { setAuthAC } from "../authReducer";

export const getAuthTC = () => (dispatch) => {
  return AuthAPI.getAuth().then((data) => {
    if (data.resultCode === 0) {
      dispatch(setAuthAC(data.data));
    }
  });
};

export const loginTC = (data) => (dispatch) => {
  AuthAPI.login(data).then((data) => {
    if (data.resultCode === 0) {
      dispatch(getAuthTC(data.data));
    }
  });
};

export const logoutTC = () => (dispatch) => {
  AuthAPI.logout().then((data) => {
    if (data.resultCode === 0) {
      dispatch(setAuthAC());
    }
  });
};
