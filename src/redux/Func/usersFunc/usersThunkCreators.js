import { UserAPI } from "../../../api/api";
import { setUserProfileAC } from "../../profileReducer";
import {
  followAC,
  setCurrentPageAC,
  setFollowIsFetchingAC,
  setIsFetchingAC,
  setTotalCountAC,
  setUsersAC,
} from "../../usersReducer";

export const getUsersTC = (usersOnPageCount, pageNumber) => {
  return (dispatch) => {
    dispatch(setIsFetchingAC(true));
    dispatch(setCurrentPageAC(pageNumber));
    UserAPI.getUsers(usersOnPageCount, pageNumber).then((data) => {
      dispatch(setUsersAC(data.items));
      dispatch(setTotalCountAC(data.totalCount));
      dispatch(setIsFetchingAC(false));
    });
  };
};

export const setFollowUserStatusTC = (userId, followed) => {
  return (dispatch) => {
    dispatch(setFollowIsFetchingAC(userId, true));
    if (followed) {
      UserAPI.unfollowUser(userId).then((data) => {
        if (data.resultCode === 0) {
          dispatch(followAC(userId));
        }
        dispatch(setFollowIsFetchingAC(userId, false));
      });
    } else {
      UserAPI.followUser(userId).then((data) => {
        if (data.resultCode === 0) {
          dispatch(followAC(userId));
        }
        dispatch(setFollowIsFetchingAC(userId, false));
      });
    }
  };
};

export const getUserByIdTC = (userId) => (dispatch) => {
  UserAPI.getUserById(userId).then((data) => {
    dispatch(setUserProfileAC(data));
  });
};
