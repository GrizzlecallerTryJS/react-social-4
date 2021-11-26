import {
  _addPostFunc,
  _currentNewPostTextAreaValue,
  _setUserId,
  _setUserProfile,
  _setUserStatus,
} from "./profileFunc/profileFunc";

const ADD_POST = "ADD_POST";
const CURRENT_NEW_POST_TEXT = "CURRENT_NEW_POST_TEXT";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_USER_ID = "SET_USER_ID";
const SET_USER_STATUS = "SET_USER_STATUS";

const initialState = {
  profileData: null,
  profileStatus: "",
  postData: [
    { id: 1, message: "first", likesCount: 4 },
    { id: 2, message: "second", likesCount: 6 },
    { id: 3, message: "lorem", likesCount: 2 },
  ],
  tempPostData: { message: "" },
  userId: null,
  defaultId: 8184,
};

const profileReducer = (state = initialState, action) => {
  let stateCopy = { ...state };
  stateCopy.postData = [...state.postData];
  stateCopy.tempPostData = { ...state.tempPostData };

  switch (action.type) {
    case ADD_POST:
      _addPostFunc(stateCopy);
      return stateCopy;
    case CURRENT_NEW_POST_TEXT:
      _currentNewPostTextAreaValue(stateCopy, action.text);
      return stateCopy;
    case SET_USER_PROFILE:
      _setUserProfile(stateCopy, action.profile);
      return stateCopy;
    case SET_USER_ID:
      _setUserId(stateCopy, action.userId);
      return stateCopy;
    case SET_USER_STATUS:
      _setUserStatus(stateCopy, action.userId, action.status);
      return stateCopy;
    default:
      return state;
  }
};

export const addPostAC = () => {
  return {
    type: ADD_POST,
  };
};

export const currentNewPostTextAreaValueAC = (text) => {
  return {
    type: CURRENT_NEW_POST_TEXT,
    text: text,
  };
};

export const setUserProfileAC = (profile) => {
  return {
    type: SET_USER_PROFILE,
    profile,
  };
};

export const setUserIdAC = (userId) => {
  return {
    type: SET_USER_ID,
    userId,
  };
};

export const setUserStatusAC = (userId, status) => {
  return {
    type: SET_USER_STATUS,
    userId,
    status,
  };
};

export default profileReducer;
