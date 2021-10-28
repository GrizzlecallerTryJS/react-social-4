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
  switch (action.type) {
    case ADD_POST:
      _addPostFunc(state);
      return state;
    case CURRENT_NEW_POST_TEXT:
      _currentNewPostTextAreaValue(state, action.text);
      return state;
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
