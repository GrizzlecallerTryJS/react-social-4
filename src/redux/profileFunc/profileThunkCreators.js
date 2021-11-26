import { UserAPI } from "../../api/api";
import { setUserProfileAC, setUserStatusAC } from "../profileReducer";

export const getProfileTC = (userId) => {
  return (dispatch) => {
    UserAPI.getUserById(userId).then((data) => {
      dispatch(setUserProfileAC(data));
    });
  };
};

export const getUserStatusTC = (userId) => {
  return (dispatch) => {
    UserAPI.getStatus(userId).then((data) => {
      if (data) {
        dispatch(setUserStatusAC(userId, data));
      }
    });
  };
};

export const setUserStatusTC = (userId, newStatus) => {
  debugger;
  return (dispatch) => {
    UserAPI.setStatus(newStatus).then((data) => {
      if (data.resultCode === 0) {
        dispatch(setUserStatusAC(userId, newStatus));
      }
    });
  };
};
