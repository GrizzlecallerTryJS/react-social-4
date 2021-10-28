import {
  _addMessageFunc,
  _currentNewMessageTextAreaValue,
} from "./dialogFunc/dialogFunc";

const SEND_MESSAGE = "SEND_MESSAGE";
const CURRENT_NEW_MESSAGE_TEXT = "CURRENT_NEW_MESSAGE_TEXT";

const dialogsReducer = (state, action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      _addMessageFunc(state, action.dialogId);
      return state;
    case CURRENT_NEW_MESSAGE_TEXT:
      _currentNewMessageTextAreaValue(state, action.text);
      return state;
    default:
      return state;
  }
};

export const addMessageAC = (dialogId) => {
  return {
    type: SEND_MESSAGE,
    dialogId: dialogId,
  };
};

export const currentNewMessageTextAreaValueAC = (text) => {
  return {
    type: CURRENT_NEW_MESSAGE_TEXT,
    text: text,
  };
};

export default dialogsReducer;
