import { UserAPI } from "../../api/api";
import { setUserProfileAC } from "../profileReducer";

export const getProfileTC = (userId) => {
  return (dispatch) => {
    UserAPI.getUserById(userId).then((data) => {
      dispatch(setUserProfileAC(data));
    });
  };
};
