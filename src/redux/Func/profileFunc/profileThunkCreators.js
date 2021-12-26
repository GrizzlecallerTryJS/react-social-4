import { ProfileAPI, UserAPI } from "../../../api/api";
import { setUserProfileAC, setUserStatusAC } from "../../profileReducer";

export const getProfileTC = (userId) => {
  return (dispatch) => {
    UserAPI.getUserById(userId).then((data) => {
      dispatch(setUserProfileAC(data));
    });
  };
};

export const getUserStatusTC = (userId) => {
  return (dispatch) => {
    ProfileAPI.getStatus(userId).then((data) => {
      if (data) {
        dispatch(setUserStatusAC(userId, data));
      }
    });
  };
};

export const setUserStatusTC = (userId, newStatus) => {
  return (dispatch) => {
    ProfileAPI.setStatus(newStatus).then((data) => {
      if (data.resultCode === 0) {
        dispatch(setUserStatusAC(userId, newStatus));
      }
    });
  };
};
