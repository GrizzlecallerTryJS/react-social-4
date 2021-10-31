import {
  _addPostFunc,
  _currentNewPostTextAreaValue,
} from "./profileFunc/profileFunc";

const ADD_POST = "ADD_POST";
const CURRENT_NEW_POST_TEXT = "CURRENT_NEW_POST_TEXT";

const initialState = {
  postData: [
    { id: 1, message: "first", likesCount: 4 },
    { id: 2, message: "second", likesCount: 6 },
    { id: 3, message: "lorem", likesCount: 2 },
  ],
  tempPostData: { message: "" },
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

export default profileReducer;
